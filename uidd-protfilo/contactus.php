 <?php
include 'include/header.php';
?>
<br>
 
 <!--Contact Us-->


    <section id="contact" class="contact">
    <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
            <div class="contact-info">
                <h3>Contact Information</h3>
                <p><i class="fas fa-envelope"></i> <a href="mailto:uiindustryprivetlimited@gmail.com">uiindustryprivetlimited@gmail.com</a></p>
                <p><i class="fas fa-phone"></i> <a href="tel:+94764353012">+94 76 4353 012</a></p>
                <p><i class="fas fa-map-marker-alt"></i> Galewela, Sri Lanka</p>
                <div class="contact-social">
                    <a href="https://github.com/UdaraIrunika" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/udara-irunika-770bb934a/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/d.udarairunikade?igsh=MTI5ZXhrbHQ1OHhscw==" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://x.com/DamuniZoys48998?t=fG8v9JEWmSJsqhFA0_vqCA&s=09" target="_blank"><i class="fab fa-x"></i></a>
                    <a href="https://www.facebook.com/share/1LbKmz47pH/" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.tiktok.com/@uidd_7pl?_t=ZS-90EgtakyOpD&_r=1" target="_blank"><i class="fab fa-tiktok"></i></a>
                </div>
            </div>
           <form id="contact-form" class="contact-form">
                <div class="form-group">
                    <input type="text" name="user_name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <input type="email" name="user_email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <input type="text" name="subject" placeholder="Subject">
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn primary">Send Message</button>
            </form>

            <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
            <script>
              const form = document.getElementById('contact-form');

                form.addEventListener('submit', function(e){
                    e.preventDefault();

                    emailjs.sendForm(
                        'service_bn85zae',       // Your Service ID
                        'template_auwj83p',      // Your Template ID
                        this,                     // The form element
                        'wxDUx3lT39EZ5Robm'         // Replace with your EmailJS public key
                    )
                    .then(() => {
                        alert('Message sent successfully!');
                        form.reset();
                    }, (err) => {
                        alert('Failed to send message: ' + JSON.stringify(err));
                    });
                });

            </script>
            <script>
                form.addEventListener('submit', function(e){
                    e.preventDefault();
                    const name = form.user_name.value;
                    const email = form.user_email.value;
                    const subject = form.subject.value;
                    const message = form.message.value;

                    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
                    const whatsappLink = `https://wa.me/94764353012?text=${whatsappMessage}`;
                    window.open(whatsappLink, '_blank'); // opens WhatsApp chat
                });

            </script>

        </div>
    </div>
</section>


<?php
include 'include/footer.php';
?>