import clinicDental from "@/assets/clinic dental machine.jpeg";
import serviceRootCanalImage from "@/assets/clinic  reception and waiting area.jpeg";
import generalDentistryImage from "@/assets/General Dentistry.png";
import orthodonticsImage from "@/assets/Orthodontics.png";
import oralSurgeryImage from "@/assets/Oral Surgery.png";
import cosmeticDentistryImage from "@/assets/Cosmetic Dentistry.png";
import pediatricDentistryImage from "@/assets/Pediatric Dentistry.png";
import dentalImplantsImage from "@/assets/Dental Implants.png";

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
];

export function getServiceDetailBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
