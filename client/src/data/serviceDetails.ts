import clinicDental from "@/assets/clinic dental machine.jpeg";
import serviceRootCanalImage from "@/assets/clinic  reception and waiting area.jpeg";
import generalDentistryImage from "@/assets/General Dentistry.png";
import orthodonticsImage from "@/assets/Orthodontics.png";
import oralSurgeryImage from "@/assets/Oral Surgery.png";
import cosmeticDentistryImage from "@/assets/Cosmetic Dentistry.png";
import pediatricDentistryImage from "@/assets/Pediatric Dentistry.png";
import dentalImplantsImage from "@/assets/Dental Implants.png";
import periapicalXraysImage from "@/assets/Periapical Xrays.jpeg";
import toothColouredFillingsImage from "@/assets/Tooth Coloured Fillings.png";
import compositeBondingImage from "@/assets/Composite Bonding.png";
import toothExtractionsImage from "@/assets/tooth extraction.png";
import wisdomToothSurgeryImage from "@/assets/Wisdom Tooth Surgery.jfif";
import rootCanalTreatmentImage from "@/assets/Root Canal Treatment.jfif";
import crownBridgeImage from "@/assets/Crown & Bridge.jfif";
import veneersImage from "@/assets/Veneers.jfif";
import clearAlignersImage from "@/assets/Clear Aligners.jfif";
import removableDenturesImage from "@/assets/Removable Dentures.jpg";
import gumsTreatmentImage from "@/assets/Gums Treatment.jfif";

export type ServiceDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  intro: string;
  duration: string;
  visitPlan: string;
  comfortLevel: string;
  recovery: string;
  treatments: string[];
  idealFor: string[];
  process: { step: string; detail: string }[];
  faqs: { question: string; answer: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription: "Routine exams, cleaning, and preventive care for stable long-term oral health.",
    heroImage: generalDentistryImage,
    intro:
      "General dentistry is your core oral health foundation. Our team focuses on prevention, early detection, and clear treatment planning to avoid complex issues later.",
    duration: "30-60 minutes",
    visitPlan: "Every 6 months",
    comfortLevel: "Very comfortable",
    recovery: "No downtime",
    treatments: [
      "Comprehensive dental examination and digital diagnostics",
      "Professional scaling and polishing",
      "Cavity detection and conservative fillings",
      "Preventive fluoride guidance and home-care planning",
    ],
    idealFor: [
      "Patients needing regular checkups and hygiene maintenance",
      "Early-stage tooth sensitivity or gum irritation",
      "Families looking for preventive care plans",
    ],
    process: [
      {
        step: "Assessment",
        detail: "Clinical exam, dental history review, and digital imaging when needed.",
      },
      {
        step: "Preventive Cleaning",
        detail: "Plaque and tartar removal followed by polishing for healthier gums.",
      },
      {
        step: "Treatment Planning",
        detail: "Any findings are explained with clear options and phased recommendations.",
      },
      {
        step: "Maintenance",
        detail: "Follow-up schedule and personalized care instructions for home.",
      },
    ],
    faqs: [
      {
        question: "How often should I get a checkup?",
        answer: "Most patients benefit from a checkup every six months. Higher-risk cases may need shorter intervals.",
      },
      {
        question: "Are dental cleanings painful?",
        answer: "Most cleanings are comfortable. If gums are sensitive, we adjust technique and provide comfort-focused care.",
      },
      {
        question: "Can I combine checkup and cleaning in one visit?",
        answer: "Yes. In most cases, examination and cleaning are completed in the same appointment.",
      },
    ],
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    shortDescription: "Braces and aligners for improved bite, alignment, and smile confidence.",
    heroImage: orthodonticsImage,
    intro:
      "Orthodontic care aligns teeth and improves bite function. We design plans that balance aesthetics, chewing comfort, and long-term stability.",
    duration: "45-75 minutes",
    visitPlan: "Every 4-8 weeks",
    comfortLevel: "Mild pressure initially",
    recovery: "No downtime",
    treatments: [
      "Comprehensive bite and alignment evaluation",
      "Fixed braces and clear aligner treatment plans",
      "Space management and crowding correction",
      "Retention planning after alignment",
    ],
    idealFor: [
      "Crowded, spaced, or rotated teeth",
      "Bite issues causing uneven wear or discomfort",
      "Patients seeking straighter, easier-to-clean teeth",
    ],
    process: [
      {
        step: "Diagnosis",
        detail: "Facial, dental, and bite analysis with digital records.",
      },
      {
        step: "Appliance Selection",
        detail: "Choice of braces or aligners based on your needs and goals.",
      },
      {
        step: "Active Alignment",
        detail: "Scheduled adjustments and progress monitoring.",
      },
      {
        step: "Retention",
        detail: "Retainers are provided to maintain final results.",
      },
    ],
    faqs: [
      {
        question: "How long does orthodontic treatment take?",
        answer: "Treatment often ranges from 6 to 24 months depending on complexity.",
      },
      {
        question: "Are aligners better than braces?",
        answer: "Both are effective. We recommend based on tooth movement needs, lifestyle, and compliance.",
      },
      {
        question: "Will treatment affect speech?",
        answer: "Minor temporary changes are possible, especially with aligners, and usually settle quickly.",
      },
    ],
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    shortDescription: "Safe surgical care including extractions and specialist oral procedures.",
    heroImage: oralSurgeryImage,
    intro:
      "Our oral surgery services are performed with precise planning and strict sterile protocols. Comfort, safety, and predictable healing are the priority.",
    duration: "45-120 minutes",
    visitPlan: "Case dependent",
    comfortLevel: "Local anesthesia used",
    recovery: "2-7 days typical",
    treatments: [
      "Simple and surgical tooth extractions",
      "Wisdom tooth removal with post-op guidance",
      "Minor oral lesion evaluation",
      "Pre-prosthetic and supportive surgical care",
    ],
    idealFor: [
      "Impacted or severely damaged teeth",
      "Chronic infection or pain requiring extraction",
      "Patients requiring specialist surgical intervention",
    ],
    process: [
      {
        step: "Pre-Op Evaluation",
        detail: "Medical history, imaging, and surgical risk assessment.",
      },
      {
        step: "Procedure",
        detail: "Comfort-managed surgery performed with minimally traumatic technique.",
      },
      {
        step: "Immediate Care",
        detail: "Bleeding control, medication guidance, and recovery instructions.",
      },
      {
        step: "Review",
        detail: "Healing is monitored and additional care is provided if needed.",
      },
    ],
    faqs: [
      {
        question: "Will I feel pain during oral surgery?",
        answer: "Local anesthesia controls pain during treatment. Mild soreness after procedure is expected and manageable.",
      },
      {
        question: "How soon can I return to work?",
        answer: "Many patients return the next day for simple cases; complex surgeries may need more rest.",
      },
      {
        question: "Do you provide post-surgery instructions?",
        answer: "Yes. You receive clear written and verbal post-op care guidance for recovery.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Prosthodontics",
    shortDescription: "Restorative and prosthetic care to rebuild function, comfort, and smile confidence.",
    heroImage: cosmeticDentistryImage,
    intro:
      "Cosmetic dentistry improves the appearance of your smile while respecting function. We focus on natural-looking outcomes that match your facial profile.",
    duration: "45-90 minutes",
    visitPlan: "1-3 visits typical",
    comfortLevel: "Minimally invasive",
    recovery: "Usually immediate",
    treatments: [
      "Professional tooth whitening",
      "Veneer and smile design planning",
      "Aesthetic bonding and contouring",
      "Shade matching for natural results",
    ],
    idealFor: [
      "Discolored, chipped, or uneven teeth",
      "Patients preparing for social or professional events",
      "Anyone seeking a more balanced smile line",
    ],
    process: [
      {
        step: "Smile Analysis",
        detail: "Facial and dental proportions are reviewed with your target outcomes.",
      },
      {
        step: "Design Planning",
        detail: "Treatment options and expected visual results are discussed.",
      },
      {
        step: "Aesthetic Treatment",
        detail: "Whitening, bonding, or veneer-related procedures are carried out.",
      },
      {
        step: "Finishing",
        detail: "Final polishing and long-term maintenance guidance.",
      },
    ],
    faqs: [
      {
        question: "How long does whitening last?",
        answer: "Results vary by habits, but with maintenance many patients keep results for months to over a year.",
      },
      {
        question: "Are veneers permanent?",
        answer: "Veneers are a long-term treatment and may require replacement after years of use.",
      },
      {
        question: "Will cosmetic treatment look natural?",
        answer: "Yes. We use conservative shaping and shade selection to keep results natural-looking.",
      },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Paediatric Dentistry",
    shortDescription: "Gentle, preventive-focused dental care for children and adolescents.",
    heroImage: pediatricDentistryImage,
    intro:
      "Pediatric dentistry requires clinical precision and child-friendly communication. We create positive visits that build lifelong oral health habits.",
    duration: "30-60 minutes",
    visitPlan: "Every 6 months",
    comfortLevel: "Child-friendly care",
    recovery: "Usually none",
    treatments: [
      "Routine exam and preventive cleaning for children",
      "Cavity management in primary and young permanent teeth",
      "Fluoride application and sealants",
      "Parental counseling on brushing and nutrition",
    ],
    idealFor: [
      "Toddlers to teenagers needing regular dental care",
      "Children with early cavities or enamel concerns",
      "Parents seeking preventive dental routines",
    ],
    process: [
      {
        step: "Welcome and Comfort",
        detail: "Child is familiarized with the clinic environment and tools.",
      },
      {
        step: "Clinical Check",
        detail: "Teeth, gums, and bite development are examined.",
      },
      {
        step: "Preventive Care",
        detail: "Cleaning, fluoride, and sealant support as indicated.",
      },
      {
        step: "Home Guidance",
        detail: "Parents receive clear practical tips for daily oral care.",
      },
    ],
    faqs: [
      {
        question: "When should my child first see a dentist?",
        answer: "The first dental visit is recommended by age one or within six months of the first tooth.",
      },
      {
        question: "How can I reduce cavity risk in children?",
        answer: "Consistent brushing, reduced sugary snacks, and regular checkups are the most effective approach.",
      },
      {
        question: "Do you handle anxious children?",
        answer: "Yes. We use behavior-friendly communication and a gradual approach to build trust.",
      },
    ],
  },
  {
    slug: "periodontics",
    title: "Periodontology",
    shortDescription: "Focused gum care for prevention and treatment of periodontal disease.",
    heroImage: clinicDental,
    intro:
      "Healthy gums are essential for tooth stability and overall oral health. Periodontic care targets bleeding gums, inflammation, and bone-support preservation.",
    duration: "45-75 minutes",
    visitPlan: "3-6 month maintenance",
    comfortLevel: "Comfort-managed sessions",
    recovery: "1-3 days mild sensitivity",
    treatments: [
      "Comprehensive gum health assessment",
      "Deep cleaning and periodontal maintenance",
      "Localized antimicrobial care where indicated",
      "Long-term gum stability follow-up",
    ],
    idealFor: [
      "Bleeding gums, swelling, or persistent bad breath",
      "Patients with diagnosed periodontal pockets",
      "Adults needing supportive gum maintenance",
    ],
    process: [
      {
        step: "Gum Mapping",
        detail: "Gum pocket depth and inflammation are measured in detail.",
      },
      {
        step: "Therapy Phase",
        detail: "Targeted deep cleaning reduces bacterial load and inflammation.",
      },
      {
        step: "Re-Evaluation",
        detail: "Healing response is checked and treatment is refined if needed.",
      },
      {
        step: "Maintenance Plan",
        detail: "A recurrence-prevention schedule is designed for long-term control.",
      },
    ],
    faqs: [
      {
        question: "Can gum disease be reversed?",
        answer: "Early gingivitis can often be reversed. Advanced periodontitis can be controlled and stabilized with proper care.",
      },
      {
        question: "Is deep cleaning painful?",
        answer: "Treatment is performed with comfort measures. Mild soreness after appointment is common but temporary.",
      },
      {
        question: "Why does gum disease return?",
        answer: "Without maintenance and daily plaque control, disease can recur. Follow-up visits are critical.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implantology",
    shortDescription: "Long-term implant-based tooth replacement with stable function and natural appearance.",
    heroImage: dentalImplantsImage,
    intro:
      "Dental implants are a reliable option for replacing missing teeth. We use staged planning to restore chewing efficiency, esthetics, and bite balance.",
    duration: "60-120 minutes",
    visitPlan: "Multi-stage timeline",
    comfortLevel: "Local anesthesia used",
    recovery: "2-5 days initial healing",
    treatments: [
      "Implant candidacy evaluation and treatment mapping",
      "Surgical implant placement",
      "Healing and integration monitoring",
      "Final crown or prosthetic restoration",
    ],
    idealFor: [
      "Single or multiple missing teeth",
      "Patients seeking fixed long-term replacement",
      "Cases requiring improved chewing stability",
    ],
    process: [
      {
        step: "Planning",
        detail: "Bone support, bite, and smile goals are assessed in detail.",
      },
      {
        step: "Implant Placement",
        detail: "Implant is positioned with precision-driven surgical protocol.",
      },
      {
        step: "Healing Phase",
        detail: "Time is allowed for osseointegration and tissue stabilization.",
      },
      {
        step: "Final Restoration",
        detail: "Custom prosthetic crown or bridge is attached for function and esthetics.",
      },
    ],
    faqs: [
      {
        question: "Are implants safe?",
        answer: "Implants are a well-established and predictable treatment when case selection and planning are appropriate.",
      },
      {
        question: "How long do implants last?",
        answer: "With good hygiene and maintenance, implants can last many years.",
      },
      {
        question: "Can I eat normally after implants?",
        answer: "Yes, after healing and final restoration, chewing function typically improves significantly.",
      },
    ],
  },
  {
    slug: "operative-dentistry",
    title: "Operative Dentistry",
    shortDescription: "Conservative restorative treatment to repair tooth structure and preserve natural teeth.",
    heroImage: serviceRootCanalImage,
    intro:
      "Operative dentistry focuses on restoring teeth affected by decay, wear, or minor fractures. Our approach prioritizes conservative tooth preparation, durable materials, and long-term function.",
    duration: "45-75 minutes",
    visitPlan: "As needed based on treatment plan",
    comfortLevel: "Comfort-managed with local anesthesia when required",
    recovery: "Usually immediate with mild temporary sensitivity",
    treatments: [
      "Tooth-colored direct restorations",
      "Conservative caries removal and cavity management",
      "Replacement of failing restorations",
      "Minor structural rebuilding prior to definitive treatment",
    ],
    idealFor: [
      "Patients with caries, worn fillings, or minor tooth fractures",
      "Teeth needing conservative restorative rehabilitation",
      "Cases requiring function-focused restoration before advanced procedures",
    ],
    process: [
      {
        step: "Diagnosis and Planning",
        detail: "Clinical evaluation and imaging identify defects and guide restorative choices.",
      },
      {
        step: "Tooth Preparation",
        detail: "Only compromised tissue is removed while preserving healthy tooth structure.",
      },
      {
        step: "Restoration",
        detail: "Biocompatible filling materials are shaped for proper function and contact.",
      },
      {
        step: "Finishing and Follow-Up",
        detail: "Bite is refined, polish is completed, and maintenance guidance is provided.",
      },
    ],
    faqs: [
      {
        question: "How is operative dentistry different from endodontics?",
        answer: "Operative dentistry restores tooth structure, while endodontics treats the internal pulp and root canal system.",
      },
      {
        question: "Will tooth-colored restorations look natural?",
        answer: "Yes. Modern restorative materials are shade-matched to blend with your natural dentition.",
      },
      {
        question: "How long do restorative fillings last?",
        answer: "Longevity depends on tooth condition, bite forces, and hygiene, but many restorations function well for years.",
      },
    ],
  },
  {
    slug: "endodontics",
    title: "Endodontics",
    shortDescription: "Root canal and tooth-preservation procedures for infected or painful teeth.",
    heroImage: serviceRootCanalImage,
    intro:
      "Endodontic treatment helps save teeth affected by deep decay or pulp infection. Our protocols focus on pain control, disinfection, and durable restoration.",
    duration: "60-90 minutes",
    visitPlan: "1-2 visits typical",
    comfortLevel: "Anesthesia-supported",
    recovery: "Mild tenderness 1-2 days",
    treatments: [
      "Root canal diagnosis and treatment",
      "Infection removal and canal disinfection",
      "Internal sealing and structural reinforcement",
      "Post-treatment restoration planning",
    ],
    idealFor: [
      "Persistent tooth pain or prolonged sensitivity",
      "Deep decay near the pulp",
      "Teeth with localized infection needing preservation",
    ],
    process: [
      {
        step: "Diagnosis",
        detail: "Symptoms, vitality, and imaging findings are evaluated.",
      },
      {
        step: "Canal Therapy",
        detail: "Infected pulp is removed and canals are cleaned and shaped.",
      },
      {
        step: "Sealing",
        detail: "Canals are sealed to prevent re-infection.",
      },
      {
        step: "Final Protection",
        detail: "A suitable restoration or crown is planned to protect the tooth.",
      },
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer: "With modern anesthesia, most patients report treatment feels similar to a regular filling.",
      },
      {
        question: "Can a treated tooth last long-term?",
        answer: "Yes. With proper restoration and hygiene, root-canal-treated teeth can function for many years.",
      },
      {
        question: "Do I always need a crown after root canal?",
        answer: "Posterior teeth often need crowns for strength. The final decision depends on remaining tooth structure.",
      },
    ],
  },
  {
    slug: "periapical-xrays",
    title: "Periapical Xrays",
    shortDescription: "Focused intraoral X-ray imaging for root, bone, and infection assessment.",
    heroImage: periapicalXraysImage,
    intro:
      "Periapical X-rays provide high-detail views of individual teeth and surrounding bone. They support accurate diagnosis for pain, trauma, infection, and treatment planning.",
    duration: "15-20 minutes",
    visitPlan: "As needed",
    comfortLevel: "Quick and comfortable",
    recovery: "No downtime",
    treatments: [
      "Single-tooth and multi-tooth diagnostic imaging",
      "Root and periapical lesion evaluation",
      "Pre- and post-treatment radiographic documentation",
    ],
    idealFor: [
      "Persistent tooth pain or sensitivity",
      "Suspected root infection or abscess",
      "Assessment before restorative or endodontic care",
    ],
    process: [
      { step: "Positioning", detail: "A sensor is placed gently to capture targeted views." },
      { step: "Imaging", detail: "Low-dose digital exposures are taken in seconds." },
      { step: "Review", detail: "Findings are explained and linked to treatment options." },
    ],
    faqs: [
      {
        question: "Is a periapical X-ray safe?",
        answer: "Yes. Digital imaging uses very low radiation and follows strict safety protocols.",
      },
      {
        question: "Do I need preparation before the X-ray?",
        answer: "No special preparation is required. It is done chairside during your visit.",
      },
      {
        question: "Will I get the result immediately?",
        answer: "Yes, images are reviewed right away with your dentist.",
      },
    ],
  },
  {
    slug: "tooth-coloured-fillings",
    title: "Tooth Coloured Fillings",
    shortDescription: "Aesthetic restorations that repair cavities while blending with natural teeth.",
    heroImage: toothColouredFillingsImage,
    intro:
      "Tooth-coloured fillings restore decayed or worn teeth using adhesive materials matched to your tooth shade. The approach is conservative and function-focused.",
    duration: "30-60 minutes",
    visitPlan: "Single visit in most cases",
    comfortLevel: "Comfort-managed",
    recovery: "Usually immediate",
    treatments: [
      "Decay removal with conservative preparation",
      "Composite resin shade matching and layering",
      "Bite adjustment and polishing for smooth finish",
    ],
    idealFor: [
      "Small to moderate cavities",
      "Replacement of old metallic fillings",
      "Cosmetic improvement of visible restorations",
    ],
    process: [
      { step: "Assessment", detail: "Tooth structure and decay depth are evaluated." },
      { step: "Restoration", detail: "Composite material is placed and cured in layers." },
      { step: "Finishing", detail: "Contacts, contour, and bite are refined and polished." },
    ],
    faqs: [
      {
        question: "How long do composite fillings last?",
        answer: "With good hygiene and routine care, they can remain functional for many years.",
      },
      {
        question: "Will the filling match my tooth color?",
        answer: "Yes. Shade selection is done to blend closely with natural enamel.",
      },
      {
        question: "Can I eat after treatment?",
        answer: "Usually yes, shortly after treatment once numbness wears off.",
      },
    ],
  },
  {
    slug: "composite-bonding",
    title: "Composite Bonding",
    shortDescription: "Minimally invasive smile enhancement for chips, gaps, and minor shape concerns.",
    heroImage: compositeBondingImage,
    intro:
      "Composite bonding reshapes teeth using aesthetic resin materials. It is a conservative cosmetic option that improves smile balance with minimal enamel removal.",
    duration: "30-75 minutes",
    visitPlan: "1-2 visits",
    comfortLevel: "Very comfortable",
    recovery: "No downtime",
    treatments: [
      "Chip and edge repair",
      "Minor gap closure and contour correction",
      "Surface refinement and polish for natural luster",
    ],
    idealFor: [
      "Chipped front teeth",
      "Small spacing concerns",
      "Patients seeking quick smile improvements",
    ],
    process: [
      { step: "Smile Review", detail: "Tooth proportions and goals are discussed." },
      { step: "Bonding", detail: "Resin is sculpted and light-cured for shape correction." },
      { step: "Polish", detail: "Final texture and gloss are adjusted for natural appearance." },
    ],
    faqs: [
      {
        question: "Is composite bonding reversible?",
        answer: "In many conservative cases, very little to no enamel removal is needed.",
      },
      {
        question: "Can bonded teeth stain?",
        answer: "They can stain over time; regular cleaning and polishing helps maintain results.",
      },
      {
        question: "How durable is bonding?",
        answer: "Durability is good for minor corrections and depends on bite forces and habits.",
      },
    ],
  },
  {
    slug: "tooth-extractions",
    title: "Tooth Extractions",
    shortDescription: "Safe removal of teeth that are severely damaged, infected, or non-restorable.",
    heroImage: toothExtractionsImage,
    intro:
      "When a tooth cannot be preserved predictably, extraction may be the best treatment. The procedure is performed with anesthesia and careful post-operative planning.",
    duration: "30-60 minutes",
    visitPlan: "Single visit",
    comfortLevel: "Anesthesia-supported",
    recovery: "2-5 days",
    treatments: [
      "Simple extractions",
      "Infection-related tooth removal",
      "Post-extraction site care and healing guidance",
    ],
    idealFor: [
      "Non-restorable fractured teeth",
      "Advanced decay with poor prognosis",
      "Persistent infection around a tooth",
    ],
    process: [
      { step: "Evaluation", detail: "Clinical exam and imaging confirm extraction need." },
      { step: "Procedure", detail: "Tooth is removed with minimally traumatic technique." },
      { step: "Aftercare", detail: "Detailed instructions are provided to support healing." },
    ],
    faqs: [
      {
        question: "Will extraction be painful?",
        answer: "Local anesthesia keeps treatment comfortable. Mild soreness after is expected.",
      },
      {
        question: "How long does healing take?",
        answer: "Initial healing is usually within a few days, with gradual full recovery.",
      },
      {
        question: "Do I need to replace the extracted tooth?",
        answer: "Often yes, especially for function and bite stability; options are discussed after healing.",
      },
    ],
  },
  {
    slug: "wisdom-tooth-surgery",
    title: "Wisdom Tooth Surgery",
    shortDescription: "Surgical removal of impacted or problematic third molars with controlled recovery.",
    heroImage: wisdomToothSurgeryImage,
    intro:
      "Wisdom tooth surgery is indicated when third molars are impacted, painful, infected, or threatening nearby teeth. Surgical planning focuses on safety and healing.",
    duration: "45-90 minutes",
    visitPlan: "Single procedure with review",
    comfortLevel: "Anesthesia-supported",
    recovery: "3-7 days typical",
    treatments: [
      "Impacted wisdom tooth removal",
      "Surgical flap and sectioning techniques as needed",
      "Post-op medications and follow-up checks",
    ],
    idealFor: [
      "Painful or recurrently infected wisdom teeth",
      "Impacted third molars affecting adjacent teeth",
      "Crowding risk and hygiene limitations around wisdom teeth",
    ],
    process: [
      { step: "Planning", detail: "Imaging and risk assessment are completed before surgery." },
      { step: "Surgery", detail: "Targeted surgical removal under local anesthesia." },
      { step: "Recovery", detail: "Healing is monitored with clear aftercare instructions." },
    ],
    faqs: [
      {
        question: "Is swelling normal after wisdom surgery?",
        answer: "Yes, mild to moderate swelling can occur for a few days and usually settles.",
      },
      {
        question: "When can I return to normal routine?",
        answer: "Most patients return in 1-3 days depending on case complexity.",
      },
      {
        question: "What should I eat after surgery?",
        answer: "Soft, cool foods are recommended initially; avoid hard and spicy foods early on.",
      },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortDescription: "Targeted endodontic care to remove infection and save natural teeth.",
    heroImage: rootCanalTreatmentImage,
    intro:
      "Root canal treatment removes infected pulp tissue, disinfects canal spaces, and seals the tooth to prevent reinfection. The goal is long-term tooth preservation.",
    duration: "60-90 minutes",
    visitPlan: "1-2 visits typical",
    comfortLevel: "Anesthesia-supported",
    recovery: "Mild tenderness 1-2 days",
    treatments: [
      "Canal disinfection and shaping",
      "Biocompatible root canal sealing",
      "Post-endodontic restoration planning",
    ],
    idealFor: [
      "Deep decay with pulpal involvement",
      "Severe lingering tooth pain",
      "Teeth with periapical infection",
    ],
    process: [
      { step: "Diagnosis", detail: "Clinical tests and imaging confirm pulp status." },
      { step: "Canal Therapy", detail: "Infected tissue is removed and canals are cleaned." },
      { step: "Seal and Restore", detail: "Canals are sealed and final restoration is planned." },
    ],
    faqs: [
      {
        question: "Can root canal save my natural tooth?",
        answer: "Yes, in many cases it allows long-term retention of the tooth.",
      },
      {
        question: "Do all treated teeth need crowns?",
        answer: "Many posterior teeth do; the recommendation depends on remaining structure.",
      },
      {
        question: "How soon can pain improve?",
        answer: "Pain usually improves significantly soon after treatment.",
      },
    ],
  },
  {
    slug: "crown-bridge",
    title: "Crown & Bridge",
    shortDescription: "Fixed prosthetic restorations to restore damaged or missing teeth.",
    heroImage: crownBridgeImage,
    intro:
      "Crowns protect compromised teeth while bridges replace missing teeth using adjacent support. Both are designed for function, durability, and natural aesthetics.",
    duration: "45-75 minutes per visit",
    visitPlan: "2-3 visits typical",
    comfortLevel: "Comfort-managed",
    recovery: "Minimal",
    treatments: [
      "Single-tooth full coverage crowns",
      "Fixed bridge design and cementation",
      "Bite calibration and occlusal adjustment",
    ],
    idealFor: [
      "Fractured or heavily restored teeth",
      "Missing single teeth requiring fixed replacement",
      "Teeth after root canal requiring coverage",
    ],
    process: [
      { step: "Preparation", detail: "Tooth structure is prepared and impressions are taken." },
      { step: "Trial", detail: "Fit, shade, and bite are checked before finalization." },
      { step: "Delivery", detail: "Final crown/bridge is cemented with post-care guidance." },
    ],
    faqs: [
      {
        question: "How long do crowns and bridges last?",
        answer: "With proper care, many restorations function successfully for years.",
      },
      {
        question: "Will the crown look natural?",
        answer: "Yes. Shade and contour are selected to match surrounding teeth.",
      },
      {
        question: "Can I chew normally with a bridge?",
        answer: "Yes, once adjusted, bridges typically restore stable chewing.",
      },
    ],
  },
  {
    slug: "veneers",
    title: "Veneers",
    shortDescription: "Aesthetic laminates that enhance color, shape, and smile symmetry.",
    heroImage: veneersImage,
    intro:
      "Veneers are thin restorations bonded to the front surfaces of teeth for cosmetic improvement. Planning focuses on natural proportions and conservative preparation.",
    duration: "45-75 minutes per visit",
    visitPlan: "2-3 visits",
    comfortLevel: "Minimally invasive",
    recovery: "Immediate in most cases",
    treatments: [
      "Smile design and proportional analysis",
      "Porcelain/composite veneer preparation",
      "Bonding, finishing, and final polish",
    ],
    idealFor: [
      "Discoloration unresponsive to whitening",
      "Minor shape irregularities and worn edges",
      "Patients seeking aesthetic smile enhancement",
    ],
    process: [
      { step: "Design", detail: "Smile goals and tooth proportions are reviewed." },
      { step: "Preparation", detail: "Minimal surface preparation is performed when needed." },
      { step: "Bonding", detail: "Veneers are bonded and adjusted for fit and esthetics." },
    ],
    faqs: [
      {
        question: "Are veneers permanent?",
        answer: "They are a long-term option and may require replacement after years of use.",
      },
      {
        question: "Do veneers stain?",
        answer: "Porcelain veneers resist staining better than natural enamel and composites.",
      },
      {
        question: "Will my teeth look natural?",
        answer: "Yes, treatment planning prioritizes natural contours and shade harmony.",
      },
    ],
  },
  {
    slug: "scaling-polishing",
    title: "Scaling & Polishing",
    shortDescription: "Professional cleaning to remove tartar, stains, and bacterial buildup.",
    heroImage: generalDentistryImage,
    intro:
      "Scaling and polishing helps maintain healthy gums and cleaner tooth surfaces. It is a preventive service recommended regularly to reduce disease risk.",
    duration: "30-45 minutes",
    visitPlan: "Every 6 months (or as advised)",
    comfortLevel: "Very comfortable",
    recovery: "No downtime",
    treatments: [
      "Supra- and subgingival deposit removal",
      "Tooth surface polishing",
      "Oral hygiene reinforcement",
    ],
    idealFor: [
      "Plaque and tartar buildup",
      "Mild gum inflammation and bleeding",
      "Routine preventive maintenance",
    ],
    process: [
      { step: "Evaluation", detail: "Gum condition and deposit levels are assessed." },
      { step: "Scaling", detail: "Plaque and calculus are removed with ultrasonic/hand instruments." },
      { step: "Polishing", detail: "Teeth are polished and home-care advice is provided." },
    ],
    faqs: [
      {
        question: "Is scaling painful?",
        answer: "Most patients find it comfortable; sensitive areas are managed gently.",
      },
      {
        question: "How often should I get scaling done?",
        answer: "Usually every six months, or more often for gum-risk patients.",
      },
      {
        question: "Can scaling whiten teeth?",
        answer: "It removes stains and makes teeth cleaner, but it is not bleaching.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription: "Professional whitening for safe and visible improvement in tooth shade.",
    heroImage: cosmeticDentistryImage,
    intro:
      "Teeth whitening brightens discolored teeth using clinically supervised whitening systems. Shade improvement depends on baseline color and lifestyle habits.",
    duration: "45-60 minutes",
    visitPlan: "Single session with maintenance advice",
    comfortLevel: "Mild temporary sensitivity possible",
    recovery: "Immediate",
    treatments: [
      "In-clinic whitening application",
      "Shade assessment and documentation",
      "Post-whitening sensitivity management guidance",
    ],
    idealFor: [
      "Extrinsic stain buildup",
      "General tooth darkening over time",
      "Patients preparing for events or smile enhancement",
    ],
    process: [
      { step: "Assessment", detail: "Current shade and suitability are evaluated." },
      { step: "Whitening", detail: "Professional whitening gel is applied under supervision." },
      { step: "Review", detail: "Final shade is recorded with maintenance recommendations." },
    ],
    faqs: [
      {
        question: "How long do whitening results last?",
        answer: "Results vary by diet and habits; maintenance can prolong outcomes.",
      },
      {
        question: "Is whitening safe for enamel?",
        answer: "When professionally supervised, whitening is considered safe and controlled.",
      },
      {
        question: "Will I feel sensitivity?",
        answer: "Some patients may feel temporary sensitivity that usually settles quickly.",
      },
    ],
  },
  {
    slug: "braces",
    title: "Braces",
    shortDescription: "Fixed orthodontic treatment for alignment correction and bite improvement.",
    heroImage: orthodonticsImage,
    intro:
      "Braces apply controlled forces to move teeth into optimal alignment. Treatment improves both esthetics and function, including bite balance and hygiene access.",
    duration: "45-75 minutes (initial), shorter review visits",
    visitPlan: "Every 4-6 weeks",
    comfortLevel: "Mild pressure after adjustments",
    recovery: "No downtime",
    treatments: [
      "Comprehensive orthodontic diagnosis",
      "Fixed appliance placement and adjustment",
      "Retention planning after active treatment",
    ],
    idealFor: [
      "Crowded or rotated teeth",
      "Spacing and bite discrepancies",
      "Long-term orthodontic correction goals",
    ],
    process: [
      { step: "Records", detail: "Digital records and bite analysis are completed." },
      { step: "Active Treatment", detail: "Braces are adjusted periodically for planned movement." },
      { step: "Retention", detail: "Retainers are provided to maintain final alignment." },
    ],
    faqs: [
      {
        question: "How long does braces treatment take?",
        answer: "Commonly 12-24 months depending on complexity.",
      },
      {
        question: "Do braces hurt?",
        answer: "Mild pressure is common after adjustments and usually temporary.",
      },
      {
        question: "Can adults get braces?",
        answer: "Yes, braces are effective for both teens and adults.",
      },
    ],
  },
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    shortDescription: "Transparent removable aligners for discreet orthodontic tooth movement.",
    heroImage: clearAlignersImage,
    intro:
      "Clear aligners straighten teeth using a sequence of custom trays. They are designed for aesthetics, convenience, and predictable movement when worn consistently.",
    duration: "30-60 minutes (initial)",
    visitPlan: "Every 6-8 weeks",
    comfortLevel: "Mild pressure during tray changes",
    recovery: "No downtime",
    treatments: [
      "Digital aligner treatment planning",
      "Staged aligner delivery and monitoring",
      "Refinement and retainer phase",
    ],
    idealFor: [
      "Patients seeking discreet orthodontic treatment",
      "Mild to moderate crowding and spacing",
      "Compliance-friendly lifestyle candidates",
    ],
    process: [
      { step: "Digital Plan", detail: "Tooth movement sequence is designed virtually." },
      { step: "Active Wear", detail: "Aligners are worn daily with scheduled tray changes." },
      { step: "Refinement", detail: "Adjustments and final retainers complete treatment." },
    ],
    faqs: [
      {
        question: "How many hours should aligners be worn daily?",
        answer: "Typically 20-22 hours per day for effective movement.",
      },
      {
        question: "Can I remove aligners for meals?",
        answer: "Yes, aligners are removed for eating and oral hygiene.",
      },
      {
        question: "Are aligners as effective as braces?",
        answer: "For selected cases, yes. Suitability is determined during evaluation.",
      },
    ],
  },
  {
    slug: "removable-dentures",
    title: "Removable Dentures",
    shortDescription: "Custom removable prostheses to restore missing teeth and chewing comfort.",
    heroImage: removableDenturesImage,
    intro:
      "Removable dentures replace missing teeth and support oral function, speech, and facial profile. Design and fit are customized for comfort and stability.",
    duration: "45-75 minutes per visit",
    visitPlan: "Multiple visits for fabrication and adjustment",
    comfortLevel: "Comfort-focused fitting",
    recovery: "Adaptation period expected",
    treatments: [
      "Complete and partial denture planning",
      "Impression, try-in, and fit verification",
      "Post-delivery adjustment appointments",
    ],
    idealFor: [
      "Single-arch or full-arch tooth loss",
      "Patients needing removable prosthetic rehabilitation",
      "Budget-conscious replacement options",
    ],
    process: [
      { step: "Planning", detail: "Clinical assessment and denture design are finalized." },
      { step: "Fabrication", detail: "Impressions and try-ins are completed for fit and esthetics." },
      { step: "Delivery", detail: "Final denture is inserted with adaptation guidance." },
    ],
    faqs: [
      {
        question: "How long does it take to get dentures?",
        answer: "It typically requires a few staged visits for accurate fit and comfort.",
      },
      {
        question: "Will dentures feel loose initially?",
        answer: "An adaptation period is normal; adjustments improve comfort and stability.",
      },
      {
        question: "How should dentures be cleaned?",
        answer: "Daily cleaning and proper storage are essential for hygiene and longevity.",
      },
    ],
  },
  {
    slug: "gums-treatment",
    title: "Gums Treatment",
    shortDescription: "Comprehensive periodontal care to control inflammation and protect support tissues.",
    heroImage: gumsTreatmentImage,
    intro:
      "Gums treatment addresses bleeding, swelling, and periodontal infection through targeted therapy and maintenance protocols aimed at long-term stability.",
    duration: "45-75 minutes",
    visitPlan: "3-6 month maintenance",
    comfortLevel: "Comfort-managed",
    recovery: "Mild temporary tenderness",
    treatments: [
      "Periodontal assessment and gum mapping",
      "Deep cleaning and anti-infective care",
      "Maintenance planning for disease control",
    ],
    idealFor: [
      "Bleeding gums and persistent inflammation",
      "Periodontal pocketing and gum recession risk",
      "Patients requiring structured gum maintenance",
    ],
    process: [
      { step: "Assessment", detail: "Pocket depth and inflammation indices are recorded." },
      { step: "Therapy", detail: "Targeted gum treatment reduces bacterial load and swelling." },
      { step: "Maintenance", detail: "Follow-up intervals are set to prevent recurrence." },
    ],
    faqs: [
      {
        question: "Can gum disease be controlled?",
        answer: "Yes, with timely treatment and maintenance, progression can be controlled effectively.",
      },
      {
        question: "Do gums heal after treatment?",
        answer: "Inflammation and bleeding often improve significantly with proper care.",
      },
      {
        question: "Is maintenance necessary after treatment?",
        answer: "Yes. Periodic maintenance is essential for long-term periodontal stability.",
      },
    ],
  },
];

export function getServiceDetailBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
