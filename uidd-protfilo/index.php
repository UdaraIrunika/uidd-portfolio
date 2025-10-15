<?php
include 'include/header.php';
?>

   <section id="home" class="hero">
    <div class="container">
        <div class="hero-content">
            <h1>Hi, I'm <span>Udara Irunika</span></h1>
            <h2>I am a <span id="typewriter"></span></h2>
            <p>I create beautiful, responsive websites with modern technologies</p>
            <div class="cta-buttons">
                <a href="#projects" class="btn primary">View My Work</a>
                <a href="#contact" class="btn secondary">Contact Me</a>
            </div>
        </div>
        <div class="hero-image">
            <img src="assest/img/image.png" alt="Udara Irunika" class="profile-img">
        </div>
    </div>
</section>

        <!-- Contact Modal -->
        <div id="contactModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3>Get Started with <span id="packageName"></span></h3>
                <form id="packageContactForm" class="contact-form">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <input type="tel" name="phone" placeholder="Your Phone Number">
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="Tell me about your project requirements..." rows="4" required></textarea>
                </div>
                <div class="form-group">
                    <label>Project Budget (LKR)</label>
                    <input type="text" name="budget" placeholder="Your budget range">
                </div>
                <button type="submit" class="btn primary">Send Inquiry</button>
            </form>
            </div>
        </div>


     

<?php
include 'include/footer.php';
?>