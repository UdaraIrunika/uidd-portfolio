<?php
include 'include/header.php';
?>
<br><br>



        <!-- Pricing Packages Section -->
        <section id="pricing" class="pricing-section">
            <div class="container">
                <h2 class="section-title">Service Packages</h2>
                <p class="section-subtitle" align="center">Professional solutions tailored to your needs and budget</p>

                <!-- Package Category Navigation -->
                <div class="package-categories">
                    <button class="category-btn active" data-category="graphic-design">Graphic Design</button>
                    <button class="category-btn" data-category="web-development">Web Development</button>
                    <button class="category-btn" data-category="iot-development">IoT Development</button>
                </div>

                <!-- Graphic Design Packages -->
                <div class="package-category active" id="graphic-design">
                    <h3 class="category-title">🎨 Graphic Design & Advertising Packages</h3>
                    <p class="category-description">Complete visual identity, branding, and advertising solutions</p>
                    
                    <div class="packages-grid">
                        <!-- Basic Design Package -->
                        <div class="package-card">
                            <div class="package-header">
                                <h4>Starter Design</h4>
                                <div class="package-price">LKR 5,000 – 8,000</div>
                            </div>
                            <div class="package-description">
                                <p>Perfect for startups and individuals looking to establish their initial brand presence</p>
                            </div>
                            <div class="package-features">
                                <h5>📦 Deliverables:</h5>
                                <ul>
                                    <li>1 Custom Logo Design</li>
                                    <li>1 Banner or Poster Design</li>
                                    <li>Brand Color Palette</li>
                                    <li>Font Style Guide</li>
                                    <li>1 Social Media Post Design</li>
                                    <li>Basic Profile Picture (DP)</li>
                                </ul>
                            </div>
                            <div class="package-cta">
                                <button class="btn primary package-btn" onclick="openContactForm('Starter Design Package')">Get Started</button>
                            </div>
                        </div>

                        <!-- Standard Branding Package -->
                        <div class="package-card popular">
                            <div class="popular-badge">Most Popular</div>
                            <div class="package-header">
                                <h4>Professional Branding</h4>
                                <div class="package-price">LKR 10,000 – 15,000</div>
                            </div>
                            <div class="package-description">
                                <p>Comprehensive branding and advertising solution for small businesses</p>
                            </div>
                            <div class="package-features">
                                <h5>📦 Deliverables:</h5>
                                <ul>
                                    <li>Complete Logo Pack (Multiple variations)</li>
                                    <li>5 Social Media Templates (FB/Instagram)</li>
                                    <li>3 Professional Poster Designs</li>
                                    <li>Business Card Design</li>
                                    <li>Brand Style Guide</li>
                                    <li>2 Advertising Banners</li>
                                    <li>Social Media Cover Photo</li>
                                    <li>Professional Profile Picture</li>
                                    <li>1 Simple Advertisement Video (15-30 sec)</li>
                                </ul>
                            </div>
                            <div class="package-cta">
                                <button class="btn primary package-btn" onclick="openContactForm('Professional Branding Package')">Get Started</button>
                            </div>
                        </div>

                        <!-- Premium Brand Identity Package -->
                        <div class="package-card">
                            <div class="package-header">
                                <h4>Premium Advertising Suite</h4>
                                <div class="package-price">LKR 18,000 – 25,000</div>
                            </div>
                            <div class="package-description">
                                <p>Complete brand identity and advertising system for established businesses</p>
                            </div>
                            <div class="package-features">
                                <h5>📦 Deliverables:</h5>
                                <ul>
                                    <li>Full Brand Kit (Logo + Variations)</li>
                                    <li>Typography System</li>
                                    <li>Complete Color Palette</li>
                                    <li>Brand Patterns & Elements</li>
                                    <!-- <li>8 Social Media Templates</li> -->
                                    <li>5 Professional Posters</li>
                                    <li>Brochure or Flyer Design</li>
                                    <li>Comprehensive Brand Guidelines</li>
                                    <li>4 Advertising Banners (Different sizes)</li>
                                    <!-- <li>Social Media Kit (DP + Cover + Highlights)</li> -->
                                    <li>2 Professional Advertisement Videos (30-60 sec)</li>
                                    <li>Brand Regeneration (Update existing assets)</li>
                                    <li>Facebook Ad Creatives (3 designs)</li>
                                    <li>Instagram Story Templates (5 designs)</li>
                                    <li>Email Newsletter Template</li>
                                </ul>
                            </div>
                            <div class="package-cta">
                                <button class="btn primary package-btn" onclick="openContactForm('Premium Advertising Suite Package')">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <!-- Additional Services Section -->
                    <div class="additional-services">
                        <h4 class="services-title">🎯 Additional Advertising Services</h4>
                        <div class="services-grid">
                            <div class="service-item">
                                <div class="service-icon">🎥</div>
                                <h5>Advertisement Videos</h5>
                                <p>Professional product promo videos, social media ads, and explainer videos</p>
                                <div class="service-price">From LKR 3,000</div>
                                <button class="btn secondary service-btn" onclick="openContactForm('Advertisement Video Service')">Inquire</button>
                            </div>
                            
                            <div class="service-item">
                                <div class="service-icon">📱</div>
                                <h5>Social Media Kit</h5>
                                <p>Complete social media branding including DP, cover, story templates</p>
                                <div class="service-price">From LKR 2,500</div>
                                <button class="btn secondary service-btn" onclick="openContactForm('Social Media Kit Service')">Inquire</button>
                            </div>
                            
                            <div class="service-item">
                                <div class="service-icon">🔄</div>
                                <h5>Brand Regeneration</h5>
                                <p>Modernize and refresh your existing brand identity and assets</p>
                                <div class="service-price">From LKR 4,000</div>
                                <button class="btn secondary service-btn" onclick="openContactForm('Brand Regeneration Service')">Inquire</button>
                            </div>
                            
                            <div class="service-item">
                                <div class="service-icon">📢</div>
                                <h5>Facebook Ads Package</h5>
                                <p>Complete set of Facebook advertising creatives and banners</p>
                                <div class="service-price">From LKR 3,500</div>
                                <button class="btn secondary service-btn" onclick="openContactForm('Facebook Ads Package')">Inquire</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Web Development Packages -->
                <div class="package-category" id="web-development">
                    <h3 class="category-title">💻 Web Design & Development Packages</h3>
                    <p class="category-description">Modern, responsive websites that drive results</p>
                    
                    <div class="packages-grid">
                        <!-- Starter Website Package -->
                        <div class="package-card">
                            <div class="package-header">
                                <h4>Starter Website</h4>
                                <div class="package-price">LKR 25,000 – 35,000</div>
                            </div>
                            <div class="package-description">
                                <p>Simple, modern website perfect for personal portfolios or small businesses</p>
                            </div>
                            <div class="package-features">
                                <h5>🚀 Features:</h5>
                                <ul>
                                    <li>1-3 Page Website</li>
                                    <li>HTML5, CSS3, JavaScript</li>
                                    <li>Fully Mobile Responsive</li>
                                    <li>Contact Form Integration</li>
                                    <li>Basic SEO Setup</li>
                                    <li>Fast Loading Speed</li>
                                    <li>Cross-browser Compatibility</li>
                                </ul>
                            </div>
                            <div class="package-cta">
                                <button class="btn primary package-btn" onclick="openContactForm('Starter Website Package')">Get Started</button>
                            </div>
                        </div>

                        <!-- Business Website Package -->
                        <div class="package-card popular">
                            <div class="popular-badge">Most Popular</div>
                            <div class="package-header">
                                <h4>Business Website</h4>
                                <div class="package-price">LKR 50,000 – 80,000</div>
                            </div>
                            <div class="package-description">
                                <p>Professional website solution for growing companies and organizations</p>
                            </div>
                            <div class="package-features">
                                <h5>🚀 Features:</h5>
                                <ul>
                                    <li>Up to 6 Custom Pages</li>
                                    <li>CMS (WordPress/PHP)</li>
                                    <li>Advanced SEO Optimization</li>
                                    <li>Admin Panel</li>
                                    <li>Blog Integration</li>
                                    <li>Social Media Integration</li>
                                    <li>Google Analytics Setup</li>
                                    <li>Website Maintenance (1 Month)</li>
                                </ul>
                            </div>
                            <div class="package-cta">
                                <button class="btn primary package-btn" onclick="openContactForm('Business Website Package')">Get Started</button>
                            </div>
                        </div>

                        <!-- Enterprise Website Package -->
                        <div class="package-card">
                            <div class="package-header">
                                <h4>Enterprise / E-Commerce</h4>
                                <div class="package-price">LKR 80,000 – 150,000+</div>
                            </div>
                            <div class="package-description">
                                <p>Advanced web solution for large businesses and e-commerce platforms</p>
                            </div>
                            <div class="package-features">
                                <h5>🚀 Features:</h5>
                                <ul>
                                    <li>Dynamic System (PHP/MySQL)</li>
                                    <!-- <li>Payment Gateway Integration</li> -->
                                    <li>Payment Integration (COD OR BankPayment)</li>
                                    <li>Advanced Admin Dashboard</li>
                                    <li>Product Management System</li>
                                    <li>User Account System</li>
                                    <li>Inventory Management</li>
                                    <li>Order Tracking System</li>
                                    <li>Security Implementation</li>
                                    <li>Website Maintenance (3 Months)</li>
                                </ul>
                            </div>
                            <div class="package-cta">
                                <button class="btn primary package-btn" onclick="openContactForm('Enterprise Website Package')">Get Quote</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- IoT Development Packages -->
                <div class="package-category" id="iot-development">
                    <h3 class="category-title">🔌 IoT System Development Packages</h3>
                    <p class="category-description">Smart connected solutions for modern challenges</p>
                    
                    <div class="packages-grid">
                        <!-- Basic IoT Prototype Package -->
                        <div class="package-card">
                            <div class="package-header">
                                <h4>Basic IoT Prototype</h4>
                                <div class="package-price">LKR 15,000 – 30,000</div>
                            </div>
                            <div class="package-description">
                                <p>Ideal for students, researchers, or proof-of-concept projects</p>
                            </div>
                            <div class="package-features">
                                <h5>🔧 Features:</h5>
                                <ul>
                                    <li>Arduino/ESP32-based System</li>
                                    <li>1-2 Sensor Integration</li>
                                    <li>Basic Web Dashboard</li>
                                    <li>Data Visualization</li>
                                    <li>Documentation & Code</li>
                                    <li>Basic Troubleshooting</li>
                                </ul>
                            </div>
                            <div class="package-cta">
                                <button class="btn primary package-btn" onclick="openContactForm('Basic IoT Prototype Package')">Get Started</button>
                            </div>
                        </div>

                        <!-- Standard IoT Dashboard Package -->
                        <div class="package-card popular">
                            <div class="popular-badge">Most Popular</div>
                            <div class="package-header">
                                <h4>Standard IoT Dashboard</h4>
                                <div class="package-price">LKR 40,000 – 60,000</div>
                            </div>
                            <div class="package-description">
                                <p>Comprehensive IoT solution for small industries and commercial applications</p>
                            </div>
                            <div class="package-features">
                                <h5>🔧 Features:</h5>
                                <ul>
                                    <li>ESP32/WiFi-based System</li>
                                    <li>3-5 Sensor Integration</li>
                                    <li>Real-time Web Dashboard</li>
                                    <li>Data Logging & Storage</li>
                                    <li>Mobile Responsive Interface</li>
                                    <li>Alert & Notification System</li>
                                    <li>Basic Analytics</li>
                                    <li>Technical Documentation</li>
                                </ul>
                            </div>
                            <div class="package-cta">
                                <button class="btn primary package-btn" onclick="openContactForm('Standard IoT Dashboard Package')">Get Started</button>
                            </div>
                        </div>

                        <!-- Advanced IoT Solution Package -->
                        <div class="package-card">
                            <div class="package-header">
                                <h4>Advanced IoT Solution</h4>
                                <div class="package-price">LKR 75,000 – 120,000+</div>
                            </div>
                            <div class="package-description">
                                <p>Enterprise-grade IoT system for companies requiring robust, scalable solutions</p>
                            </div>
                            <div class="package-features">
                                <h5>🔧 Features:</h5>
                                <ul>
                                    <li>Custom IoT Hardware Design</li>
                                    <li>Cloud Integration (Firebase/MQTT)</li>
                                    <li>Advanced Admin Dashboard</li>
                                    <li>Multi-user Access Control</li>
                                    <li>Real-time Data Analytics</li>
                                    <li>Automated Reporting</li>
                                    <li>AI Integration (Optional)</li>
                                    <li>Predictive Maintenance</li>
                                    <li>System Scalability</li>
                                    <li>Comprehensive Documentation</li>
                                </ul>
                            </div>
                            <div class="package-cta">
                                <button class="btn primary package-btn" onclick="openContactForm('Advanced IoT Solution Package')">Get Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
<br>
                <!-- Custom Solution CTA -->
                <div class="custom-solution-cta">
                    <div class="cta-content">
                        <h3>Need a Custom Solution?</h3>
                        <p>Don't see what you're looking for? I can create a tailored package specifically for your unique requirements.</p>
                        <button class="btn secondary" onclick="openContactForm('Custom Solution')">Request Custom Quote</button>
                    </div>
                </div>
            </div>
        </section>


<?php
include 'include/footer.php';
?>