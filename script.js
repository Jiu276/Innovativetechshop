// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks?.classList.remove('active');
        }
    });
});

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop?.classList.add('show');
    } else {
        backToTop?.classList.remove('show');
    }
});

backToTop?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Category Cards Animation
const categoryCards = document.querySelectorAll('.cat-card');
categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const category = this.dataset.cat;
        filterByCategory(category);
    });
});

// Filter Tags
const filterTags = document.querySelectorAll('.tag');
let currentFilter = 'all';

filterTags.forEach(tag => {
    tag.addEventListener('click', function() {
        filterTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        filterArticles();
    });
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
searchInput?.addEventListener('input', () => {
    filterArticles();
});

// Filter Articles
function filterArticles() {
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const articles = document.querySelectorAll('.article-card');
    
    articles.forEach(article => {
        const title = article.querySelector('h3')?.textContent.toLowerCase() || '';
        const content = article.querySelector('p')?.textContent.toLowerCase() || '';
        const category = article.dataset.category;
        
        const matchesSearch = title.includes(searchTerm) || content.includes(searchTerm);
        const matchesFilter = currentFilter === 'all' || category === currentFilter;
        
        if (matchesSearch && matchesFilter) {
            article.style.display = 'block';
            article.style.animation = 'cardAppear 0.5s ease';
        } else {
            article.style.display = 'none';
        }
    });
}

function filterByCategory(category) {
    currentFilter = category;
    filterTags.forEach(tag => {
        tag.classList.remove('active');
        if (tag.dataset.filter === category) {
            tag.classList.add('active');
        }
    });
    filterArticles();
    
    // Scroll to articles section
    document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' });
}

// Articles Data
const articlesData = {
    1: {
        title: "Revolutionary Perovskite Solar Cells Achieve 40% Efficiency",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Revolutionary Perovskite Solar Cells Achieve 40% Efficiency</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> August 20, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Emma Green</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Solar Tech</span>
                </div>
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800" alt="Solar Cells" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Scientists at the National Renewable Energy Laboratory have achieved a breakthrough in solar technology that could revolutionize the renewable energy industry. The new tandem solar cells, combining perovskite and silicon layers, have reached an unprecedented 40% efficiency rate.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">The Technology Behind the Breakthrough</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The innovation lies in the unique layering technique that allows different wavelengths of light to be absorbed more efficiently. The top perovskite layer captures high-energy photons, while the silicon base handles lower-energy light that passes through.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Commercial Viability</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">What makes this development particularly exciting is the potential for mass production. Unlike previous high-efficiency cells that required expensive materials and complex manufacturing processes, these new cells can be produced using existing solar panel production lines with minimal modifications.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Environmental Impact</h3>
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>50% reduction in land required for solar farms</li>
                    <li>Lower carbon footprint per kWh generated</li>
                    <li>Reduced rare earth mineral requirements</li>
                    <li>25-year lifespan with minimal degradation</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Market Implications</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Industry experts predict that this technology could make solar energy cheaper than fossil fuels in all markets by 2027. Major manufacturers including First Solar and JinkoSolar have already announced plans to license the technology.</p>
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The research team estimates that widespread adoption of these cells could reduce global CO2 emissions by 10 gigatons annually by 2035, equivalent to removing 2 billion cars from the roads.</p>
            </div>
        `
    },
    2: {
        title: "Solid-State Batteries: 1000-Mile Range EVs Are Here",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Solid-State Batteries: 1000-Mile Range EVs Are Here</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> August 5, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Alex Chen</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Electric Vehicles</span>
                </div>
                <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800" alt="Electric Vehicle" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The automotive industry has reached a historic milestone as Toyota and QuantumScape begin mass production of solid-state batteries that deliver 1000-mile range on a single charge. This breakthrough addresses the last major barrier to widespread EV adoption.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Revolutionary Technology</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Solid-state batteries replace the liquid electrolyte found in traditional lithium-ion batteries with a solid ceramic material. This change brings multiple advantages:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>3x energy density compared to current batteries</li>
                    <li>10-minute charging from 0 to 80%</li>
                    <li>Operating temperature range: -40°C to 80°C</li>
                    <li>Zero risk of thermal runaway or fire</li>
                    <li>1 million mile lifespan</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Manufacturing Breakthrough</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The key to commercialization was solving the dendrite problem that plagued earlier solid-state designs. QuantumScape's proprietary ceramic separator prevents lithium metal from forming dendrites that could short-circuit the battery.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Market Impact</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Toyota's first vehicles with solid-state batteries will launch in Q4 2025, with a starting price only $5,000 more than current models. Ford, GM, and Stellantis have announced partnerships to implement the technology by 2026.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Environmental Benefits</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The longer lifespan and improved efficiency mean fewer batteries need to be manufactured, reducing mining requirements by 60%. The solid-state design also simplifies recycling, with 95% of materials recoverable.</p>
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Industry analysts predict this technology will accelerate the transition to electric vehicles, with EVs reaching 75% of new car sales by 2030.</p>
            </div>
        `
    },
    3: {
        title: "AI-Powered Homes Cut Energy Usage by 70%",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">AI-Powered Homes Cut Energy Usage by 70%</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> July 22, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Sarah Mills</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Smart Home</span>
                </div>
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" alt="Smart Home" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">A comprehensive study of 10,000 homes equipped with advanced AI energy management systems shows dramatic reductions in energy consumption without sacrificing comfort. The systems learn occupant patterns and optimize every aspect of home energy use.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">How AI Optimization Works</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The AI system integrates with all home systems including HVAC, lighting, appliances, and solar panels. Machine learning algorithms analyze:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Occupancy patterns and daily routines</li>
                    <li>Weather forecasts and seasonal trends</li>
                    <li>Real-time electricity pricing</li>
                    <li>Solar generation predictions</li>
                    <li>Appliance efficiency curves</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Real-World Results</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Participating households saw average annual savings of $3,200 on energy bills. The AI systems achieved this through:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Predictive pre-cooling/heating based on weather forecasts</li>
                    <li>Automatic load shifting to off-peak hours</li>
                    <li>Smart EV charging optimization</li>
                    <li>Adaptive lighting that follows natural circadian rhythms</li>
                    <li>Appliance scheduling based on solar production</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Privacy and Control</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">All processing happens locally on a dedicated home server, ensuring privacy. Homeowners maintain full control with simple override options and can set comfort preferences that the AI respects.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Future Developments</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Next-generation systems will integrate with neighborhood microgrids to enable peer-to-peer energy trading, potentially making some homes energy-positive and profitable.</p>
            </div>
        `
    },
    4: {
        title: "Ocean Cleanup Array Removes 90% of Pacific Garbage Patch",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Ocean Cleanup Array Removes 90% of Pacific Garbage Patch</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> July 10, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Ocean Warriors</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Recycling Tech</span>
                </div>
                <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800" alt="Ocean Cleanup" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The Ocean Cleanup's System 003 has achieved what many thought impossible: removing 90% of the Great Pacific Garbage Patch. Over 100,000 tons of plastic have been extracted and converted into valuable resources.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Revolutionary Design</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">System 003 consists of a 2.5-kilometer-long U-shaped barrier that moves slowly through the water, concentrating plastic for collection. Key innovations include:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>AI-powered navigation to target high-concentration areas</li>
                    <li>Selective collection that allows marine life to escape</li>
                    <li>Solar-powered operation with zero emissions</li>
                    <li>Onboard processing that compacts plastic for efficient transport</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Circular Economy Success</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Collected plastic is processed into three streams:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>40% converted to renewable fuel through pyrolysis</li>
                    <li>35% recycled into durable products like building materials</li>
                    <li>25% used to create new ocean cleanup equipment</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Global Expansion</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Following this success, similar systems are being deployed in the Atlantic and Indian Oceans. The technology has been open-sourced, enabling local organizations to build smaller versions for rivers and harbors.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Prevention Measures</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The project has catalyzed global action on plastic pollution. Over 50 countries have implemented extended producer responsibility laws, and major corporations have committed to 100% recyclable packaging by 2027.</p>
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Marine biologists report significant recovery in affected ecosystems, with fish populations increasing by 40% and seabird mortality from plastic ingestion dropping by 75%.</p>
            </div>
        `
    },
    5: {
        title: "Vertical Farms Use 95% Less Water, Feed Millions",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Vertical Farms Use 95% Less Water, Feed Millions</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> June 28, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Dr. James Field</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Agriculture</span>
                </div>
                <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800" alt="Vertical Farm" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Vertical farming has reached a tipping point, with facilities in major cities now producing enough fresh produce to feed millions while using a fraction of traditional farming resources.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Technological Advances</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Modern vertical farms combine multiple innovations:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>LED grow lights optimized for each crop's spectrum needs</li>
                    <li>Aeroponic systems that mist roots with nutrients</li>
                    <li>AI-controlled climate zones for different growth stages</li>
                    <li>Automated seeding, monitoring, and harvesting</li>
                    <li>Closed-loop water systems with 95% recycling rate</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Production Efficiency</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">A single 30-story vertical farm can produce as much as 400 acres of traditional farmland while using:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>95% less water</li>
                    <li>No pesticides or herbicides</li>
                    <li>50% less fertilizer</li>
                    <li>365-day growing season</li>
                    <li>30-day seed-to-harvest for leafy greens</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Urban Food Security</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Cities like Singapore, Tokyo, and New York now source 40% of their fresh produce from local vertical farms. This reduces transportation emissions by 90% and ensures food security during supply chain disruptions.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Economic Viability</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Production costs have dropped 70% in five years, making vertical farm produce competitive with field-grown crops. Energy costs, the largest expense, are offset by on-site renewable generation and waste heat recovery.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Future Expansion</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Next-generation facilities will add protein production through insect farming and cellular agriculture, creating complete nutrition sources in urban environments.</p>
            </div>
        `
    },
    6: {
        title: "Floating Wind Turbines Power Entire Coastal Cities",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Floating Wind Turbines Power Entire Coastal Cities</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> May 15, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Wind Tech Daily</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Energy</span>
                </div>
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800" alt="Wind Turbines" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Floating wind farms in deep ocean waters are generating 50GW of clean energy, enough to power entire coastal cities. This technology has unlocked wind resources previously inaccessible with fixed-bottom turbines.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Engineering Breakthrough</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The new floating platforms use dynamic positioning systems that maintain stability in 30-foot waves. Each turbine stands 300 meters tall with 150-meter blades, generating 20MW of power.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Advantages of Deep-Sea Wind</h3>
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Stronger, more consistent winds</li>
                    <li>No visual impact from shore</li>
                    <li>No interference with shipping lanes</li>
                    <li>Minimal environmental impact</li>
                    <li>80% capacity factor vs 35% for onshore wind</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Economic Impact</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Floating wind has become the cheapest source of electricity for coastal regions, at $0.02 per kWh. The industry has created 500,000 jobs in manufacturing, installation, and maintenance.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Environmental Benefits</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The floating platforms have become artificial reefs, increasing marine biodiversity by 200%. Fish populations around the farms have tripled, benefiting commercial fishing.</p>
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">With 200GW of floating wind capacity planned by 2030, this technology will provide 15% of global electricity needs.</p>
            </div>
        `
    },
    7: {
        title: "AI Robots Extract 99% of Rare Metals from E-Waste",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">AI Robots Extract 99% of Rare Metals from E-Waste</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> April 20, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Tech Cycle</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Recycling</span>
                </div>
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" alt="E-Waste Recycling" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Automated recycling facilities powered by AI and robotics are recovering 99% of valuable materials from electronic waste, reducing the need for environmentally destructive mining operations.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Advanced Recognition Systems</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Computer vision systems can identify and sort 10,000 different electronic components per minute. Machine learning algorithms recognize valuable materials even when mixed with other waste.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Precision Extraction</h3>
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Robotic arms with 0.1mm precision</li>
                    <li>Laser cutting for component separation</li>
                    <li>Chemical-free metal extraction using electromagnetic fields</li>
                    <li>Nano-filtering for rare earth element recovery</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Economic Value</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Each facility processes 100,000 tons of e-waste annually, recovering $500 million worth of materials including gold, silver, palladium, and rare earth elements. This has made e-waste recycling more profitable than mining.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Environmental Impact</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The technology has reduced the need for new mines by 60%, preserving ecosystems and reducing water pollution. Energy consumption for metal recovery is 90% lower than traditional mining.</p>
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">With 100 facilities operational worldwide, the goal of achieving a circular economy for electronics by 2030 is within reach.</p>
            </div>
        `
    },
    8: {
        title: "Living Buildings Generate More Energy Than They Use",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Living Buildings Generate More Energy Than They Use</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> March 12, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Build Green</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Smart Buildings</span>
                </div>
                <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800" alt="Green Building" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">A new generation of "living buildings" is setting the standard for sustainable architecture. These structures generate more energy than they consume while purifying air and water for their occupants.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Integrated Energy Systems</h3>
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Building-integrated photovoltaics covering all sun-facing surfaces</li>
                    <li>Micro wind turbines in ventilation systems</li>
                    <li>Geothermal heating and cooling</li>
                    <li>Kinetic energy harvesting from foot traffic</li>
                    <li>Thermal mass storage in structural elements</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Biological Systems</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Living walls and rooftop gardens don't just look beautiful—they actively improve the building environment:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Produce oxygen and absorb CO2</li>
                    <li>Filter indoor air pollutants</li>
                    <li>Process greywater through natural filtration</li>
                    <li>Provide food for building occupants</li>
                    <li>Regulate temperature and humidity naturally</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Performance Metrics</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The Cascade Tower in Seattle, completed in 2025, demonstrates the potential:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Generates 125% of energy needs</li>
                    <li>Processes 100% of water on-site</li>
                    <li>Zero waste to landfill</li>
                    <li>Indoor air quality 10x better than conventional buildings</li>
                    <li>Operating costs 80% lower than traditional buildings</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Scalability</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Construction costs have decreased 40% in three years as techniques standardize. Major cities are updating building codes to incentivize or require net-positive energy performance for new construction.</p>
            </div>
        `
    },
    9: {
        title: "Electric Aircraft Complete First Trans-Atlantic Flight",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Electric Aircraft Complete First Trans-Atlantic Flight</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> February 8, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Sky Electric</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Electric Aviation</span>
                </div>
                <img src="https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?w=800" alt="Electric Aircraft" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">History was made as the Eviation Atlas, a hydrogen-electric hybrid aircraft, completed the first zero-emission trans-Atlantic commercial flight, marking the beginning of sustainable long-haul aviation.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Hybrid Propulsion System</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The aircraft combines hydrogen fuel cells with advanced battery technology:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Hydrogen fuel cells provide primary cruise power</li>
                    <li>Solid-state batteries handle takeoff and landing</li>
                    <li>Regenerative braking during descent charges batteries</li>
                    <li>Total efficiency 3x better than jet engines</li>
                    <li>Range: 5,000 nautical miles</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Performance Achievements</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The 200-passenger aircraft matched conventional jet performance:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Cruising speed: 500 mph</li>
                    <li>Altitude: 35,000 feet</li>
                    <li>Flight time: 7 hours NYC to London</li>
                    <li>Noise reduction: 75% quieter than jets</li>
                    <li>Operating cost: 50% lower per mile</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Infrastructure Development</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Major airports are installing green hydrogen production facilities powered by renewable energy. The hydrogen is produced on-site through electrolysis, ensuring truly zero-emission flights.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Industry Transformation</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Boeing and Airbus have announced all-electric aircraft programs with entry into service by 2028. Airlines are ordering 5,000 electric aircraft to meet net-zero commitments by 2035.</p>
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">This breakthrough means aviation can finally decouple from fossil fuels, eliminating the industry's 2.5% contribution to global CO2 emissions.</p>
            </div>
        `
    },
    10: {
        title: "Lab-Grown Meat Now Cheaper Than Traditional Meat",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Lab-Grown Meat Now Cheaper Than Traditional Meat</h2>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                    <span><i class="far fa-clock" style="color: var(--green-primary);"></i> January 25, 2025</span>
                    <span><i class="far fa-user" style="color: var(--green-primary);"></i> Future Food</span>
                    <span><i class="fas fa-folder" style="color: var(--green-primary);"></i> Agriculture</span>
                </div>
                <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800" alt="Lab Grown Meat" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Cultured meat has reached price parity with conventional meat, and in many markets is now cheaper. This milestone marks the beginning of a transformation in how humanity produces protein.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Production Breakthrough</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Advances in bioreactor design and growth medium have reduced production costs by 99% since 2020:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Plant-based growth medium replaces expensive serums</li>
                    <li>Continuous production in 50,000-liter bioreactors</li>
                    <li>21-day production cycle from cell to harvest</li>
                    <li>Energy requirements 90% lower than livestock</li>
                    <li>Yield: 1 million pounds of meat from one cell sample</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Quality and Variety</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Cultured meat now matches or exceeds conventional meat in every metric:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Identical taste, texture, and nutritional profile</li>
                    <li>Enhanced with optimal omega-3 fatty acids</li>
                    <li>Zero antibiotics or growth hormones</li>
                    <li>No risk of contamination or disease</li>
                    <li>Available in beef, chicken, pork, and seafood varieties</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Environmental Impact</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The shift to cultured meat delivers massive environmental benefits:</p>
                
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>96% reduction in greenhouse gas emissions</li>
                    <li>99% less land use</li>
                    <li>96% less water consumption</li>
                    <li>Eliminates agricultural runoff and deforestation</li>
                    <li>Frees up land for reforestation and biodiversity</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Market Adoption</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Major fast-food chains including McDonald's, KFC, and Burger King now offer cultured meat options. Grocery stores report cultured meat accounts for 30% of meat sales, expected to reach 75% by 2030.</p>
                
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">This technology promises to feed a growing global population while healing the planet, representing one of the most important innovations of the century.</p>
            </div>
        `
    }
};

// Products Data
const productsData = {
    1: {
        title: "Solar Power Bank 50000mAh",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Solar Power Bank 50000mAh - Full Review</h2>
                <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600" alt="Solar Power Bank" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <div style="background: linear-gradient(135deg, #f0fdf4, #ffffff); padding: 1.5rem; border-radius: 16px; margin-bottom: 2rem;">
                    <h3 style="color: var(--green-primary); margin-bottom: 1rem;">Eco Score: A+</h3>
                    <p style="line-height: 1.8;">This product exceeds environmental standards with 100% recycled materials and solar charging capability.</p>
                </div>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Key Features</h3>
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>50000mAh capacity - charges smartphone 12-15 times</li>
                    <li>4 foldable solar panels with 20W total output</li>
                    <li>Wireless charging pad supports up to 15W</li>
                    <li>3 USB-A ports and 2 USB-C PD ports</li>
                    <li>IP67 waterproof and dustproof rating</li>
                    <li>Built-in LED flashlight with SOS mode</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Performance</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">In our tests, the solar panels fully charged the battery in 25 hours of direct sunlight. Wall charging takes just 6 hours with a 65W charger. The wireless charging pad worked flawlessly with all tested devices.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Sustainability</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Made from 100% recycled ocean plastic with biodegradable packaging. The company plants one tree for every unit sold and offers a lifetime repair service to reduce waste.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Verdict</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The ultimate eco-friendly power solution for outdoor enthusiasts. While bulky, it provides unmatched capacity and versatility with true off-grid charging capability.</p>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <span style="font-size: 2rem; color: var(--green-primary); font-weight: bold;">$89.99</span>
                </div>
            </div>
        `
    },
    2: {
        title: "Bamboo Laptop Stand",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Bamboo Laptop Stand - Sustainable Workspace Essential</h2>
                <img src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600" alt="Bamboo Stand" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <div style="background: linear-gradient(135deg, #f0fdf4, #ffffff); padding: 1.5rem; border-radius: 16px; margin-bottom: 2rem;">
                    <h3 style="color: var(--green-primary); margin-bottom: 1rem;">Eco Score: A</h3>
                    <p style="line-height: 1.8;">Crafted from rapidly renewable bamboo with zero plastic components.</p>
                </div>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Design & Build</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">This elegantly designed stand is carved from a single piece of bamboo, ensuring maximum strength and durability. The natural wood grain gives each piece a unique appearance.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Ergonomic Benefits</h3>
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>Raises screen to eye level, reducing neck strain</li>
                    <li>6 adjustable height positions</li>
                    <li>Ventilated design keeps laptop cool</li>
                    <li>Cable management slots keep desk tidy</li>
                    <li>Supports laptops up to 17 inches</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Environmental Impact</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Bamboo grows 3 feet per day and requires no pesticides or fertilizers. This stand is treated with natural oils only and is fully biodegradable at end of life.</p>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <span style="font-size: 2rem; color: var(--green-primary); font-weight: bold;">$45.00</span>
                </div>
            </div>
        `
    },
    3: {
        title: "EcoSmart Thermostat Pro",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">EcoSmart Thermostat Pro - AI-Powered Energy Savings</h2>
                <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600" alt="Smart Thermostat" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <div style="background: linear-gradient(135deg, #f0fdf4, #ffffff); padding: 1.5rem; border-radius: 16px; margin-bottom: 2rem;">
                    <h3 style="color: var(--green-primary); margin-bottom: 1rem;">Eco Score: A+</h3>
                    <p style="line-height: 1.8;">Reduces home energy consumption by up to 40% with intelligent automation.</p>
                </div>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Smart Features</h3>
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>AI learns your schedule and preferences</li>
                    <li>Presence detection via ultrasonic sensors</li>
                    <li>Weather-adaptive temperature control</li>
                    <li>Integration with solar panels and batteries</li>
                    <li>Real-time energy usage monitoring</li>
                    <li>Voice control via all major assistants</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Energy Savings</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Users report average savings of $400 per year on energy bills. The thermostat pays for itself in just 6 months through efficiency improvements.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Installation & Compatibility</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Compatible with 95% of HVAC systems. DIY installation takes 30 minutes with step-by-step app guidance. Professional installation available for complex systems.</p>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <span style="font-size: 2rem; color: var(--green-primary); font-weight: bold;">$199.00</span>
                </div>
            </div>
        `
    },
    4: {
        title: "Ocean Bottle - Self Cleaning",
        content: `
            <div style="padding: 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Ocean Bottle - Self-Cleaning Smart Water Bottle</h2>
                <img src="https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=600" alt="Ocean Bottle" style="width: 100%; border-radius: 16px; margin-bottom: 2rem;">
                
                <div style="background: linear-gradient(135deg, #f0fdf4, #ffffff); padding: 1.5rem; border-radius: 16px; margin-bottom: 2rem;">
                    <h3 style="color: var(--green-primary); margin-bottom: 1rem;">Eco Score: A</h3>
                    <p style="line-height: 1.8;">Made from 100% recycled ocean plastic, preventing 1000 plastic bottles from entering oceans.</p>
                </div>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Revolutionary Features</h3>
                <ul style="line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
                    <li>UV-C LED purification kills 99.99% of bacteria</li>
                    <li>Double-wall vacuum insulation - 24hr cold, 12hr hot</li>
                    <li>Self-cleaning mode activates every 2 hours</li>
                    <li>Smart cap tracks hydration and reminds you to drink</li>
                    <li>1 liter capacity with wide mouth design</li>
                    <li>10-year warranty with free repairs</li>
                </ul>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Health Benefits</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">The UV-C purification system eliminates the need for frequent washing while ensuring your water is always clean and safe. The hydration tracking helps maintain optimal water intake.</p>
                
                <h3 style="color: var(--green-primary); margin: 2rem 0 1rem;">Environmental Impact</h3>
                <p style="line-height: 1.8; margin-bottom: 1.5rem;">Each bottle funds the collection of 11.4kg of ocean-bound plastic. The company has removed over 1 million kg of plastic from oceans to date.</p>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <span style="font-size: 2rem; color: var(--green-primary); font-weight: bold;">$65.00</span>
                </div>
            </div>
        `
    }
};

// Show Article Detail - Navigate to article page
function openArticle(id) {
    window.location.href = `article.html?id=${id}`;
}

// Show Product Detail
function openProduct(id) {
    const modal = document.getElementById('productModal');
    const content = document.getElementById('productContent');
    
    if (productsData[id]) {
        content.innerHTML = productsData[id].content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Modals
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.eco-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('eco-modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animated Counter for Impact Numbers
function animateCounter() {
    const counters = document.querySelectorAll('.impact-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const inc = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Initialize Counter Animation
animateCounter();

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Newsletter Form
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Welcome to our eco-warrior community! Check your email for confirmation.');
    this.reset();
});

// Load More Articles
document.getElementById('loadMoreBtn')?.addEventListener('click', function() {
    alert('Loading more articles...');
    // In a real implementation, this would load additional articles
});

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.article-card, .product-item, .impact-card').forEach(card => {
        revealObserver.observe(card);
    });
});