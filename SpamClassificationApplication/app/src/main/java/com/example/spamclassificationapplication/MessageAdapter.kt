package com.example.myapplication

import android.app.AlertDialog
import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.google.firebase.auth.FirebaseAuth

import java.net.URL
import java.time.LocalDate
import java.time.format.DateTimeFormatter

// for ML Classification
import com.example.myapplication.helpers.TextClassificationClient
import com.google.firebase.database.DatabaseReference
import org.tensorflow.lite.support.label.Category


import java.security.cert.X509Certificate
import java.time.ZoneId
import java.time.temporal.ChronoUnit
import javax.net.ssl.HttpsURLConnection

class MessageAdapter(val context: Context, val messageList:ArrayList<Message>):
    RecyclerView.Adapter<RecyclerView.ViewHolder>() {
    // We need 2 viewholders, one for recieving the message and one for sending the message

    val ITEM_RECEIVE = 1
    val ITEM_SENT = 2

    private val textClassificationClient = TextClassificationClient(context)
    private lateinit var  mDbRef: DatabaseReference

    init {
        textClassificationClient.load()
    }

    override fun getItemViewType(position: Int): Int {
        // Get the current message and check whether its by reciever or sender

        val currentMessage = messageList[position]

        return if (FirebaseAuth.getInstance().currentUser?.uid.equals(currentMessage.senderId)) {
            // IF THIS IS TRUE, THEN IT MEANS YOU ARE SENDING THE MESSAGE AND HENCE INFLATE THE SENDER
            ITEM_SENT
        } else {
            ITEM_RECEIVE
        }

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {

        // Layout according to the views we have. Based on who sends we need to layout

        return if (viewType == 1) {
            // Inflate Receive
            val view: View = LayoutInflater.from(context).inflate(R.layout.recieve, parent, false)
            RecieveViewHolder(view)
        } else {
            // Inflate Sent
            val view: View = LayoutInflater.from(context).inflate(R.layout.sent, parent, false)
            SentViewHolder(view)
        }

    }

    override fun getItemCount(): Int {
        return messageList.size
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {

        val currentMessage = messageList[position] // GETTING THE CURRENT MESSAGE

        if (holder.javaClass == SentViewHolder::class.java) { // REMMEBER THIS FOR ML MODEL, this is sender messages
            // Do for Sender

            val viewHolder = holder as SentViewHolder // Typecasting
            holder.sentMessage.text =
                currentMessage.message // EXTRACTING THE TEXT FROM THE CURRENT MESSAGE OBJECT OF SENDER

        } else {
            // Do for receiver
            val viewHolder = holder as RecieveViewHolder // Typecasting

            holder.recieveMessage.text = currentMessage.message

            // Classify the message using the TextClassificationClient
            var toSend: String = currentMessage.message.toString()
            var results: List<Category> = textClassificationClient.classify(toSend)

            val score = results[1].score

            // Check if the message is spam
            if (score > 0.9) {
                // Add the message to the spam database with sender details
                // mDbRef.child("spam").push().setValue(toSend)

                // Show a dialog notifying the user that the message is spam
                val builder = AlertDialog.Builder(context)
                builder.setMessage("This message is spam.")
                    .setPositiveButton("OK") { dialog, _ ->
                        dialog.dismiss()
                    }
                    .show()
            }

            val urls = extractUrls(toSend) // Returns a list of URLs, else -1
            if (urls != -1) {
                if (urls is List<*>) { // Check if urls is a list
                    for (url in urls) {
                        val is_phishing = isPhishing(url as String)
                        if (is_phishing == 1) {
                            // Show a dialog notifying the user that the message is spam
                            val builder = AlertDialog.Builder(context)
                            builder.setMessage("This URL is Phishing.")
                                .setPositiveButton("OK") { dialog, _ ->
                                    dialog.dismiss()
                                }
                                .show()
                        }
                    }
                }
            }
        }
    }

    class SentViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {

        val sentMessage =
            itemView.findViewById<TextView>(R.id.txt_sent_message) // Variable to hold incoming messages

    }

    class RecieveViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {

        val recieveMessage = itemView.findViewById<TextView>(R.id.txt_receive_message)

    }

    // Check if there is a URL in the message
    fun extractUrls(message: String): Any {
        val regex = """\b(https?://|www\.)\S+\b""".toRegex()
        val urls = regex.findAll(message).map { it.value }.toList()
        return if (urls.isEmpty()) -1 else urls
    }

    // Check if the URL is phishing
    // Try making this a bit more advanced using AI and APIs
    // https://medium.com/nerd-for-tech/url-feature-engineering-and-classification-66c0512fb34d
    // https://eprints.hud.ac.uk/id/eprint/24330/6/MohammadPhishing14July2015.pdf

}
