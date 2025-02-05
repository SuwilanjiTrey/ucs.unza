"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accodion"

const faqs = [
  {
    question: "What is the UNZA Computer Science Society?",
    answer:
      "The UNZA Computer Science Society is a student organization dedicated to fostering a community of tech enthusiasts, promoting learning, and creating opportunities in the field of computer science at the University of Zambia.",
  },
  {
    question: "How can I get involved with the UNZA Computer Science Society?",
    answer:
      "You can get involved by becoming a member, attending our events, participating in projects, or volunteering for various initiatives. Sign up through our website or reach out to any executive member.",
  },
  {
    question: "What events and activities does the UNZA Computer Science Society organize?",
    answer:
      "We organize workshops, hackathons, tech talks, networking events, coding competitions, and industry visits. We also run mentorship programs and collaborative projects.",
  },
  {
    question: "Are there any membership requirements for joining the UNZA Computer Science Society?",
    answer:
      "While we welcome all UNZA students, active membership requires regular participation in society activities and a small annual membership fee.",
  },
  {
    question: "How can students benefit from being a member of the UNZA Computer Science Society?",
    answer:
      "Members gain access to exclusive workshops, networking opportunities, mentorship programs, project collaborations, and industry connections. They also develop leadership and technical skills.",
  },
  {
    question: "Is the UNZA Computer Science Society open to all students or just those studying computer science?",
    answer:
      "While our primary focus is computer science students, we welcome students from all disciplines who are interested in technology and computing.",
  },
  {
    question: "Are there opportunities for networking and career development through the UNZA Computer Science Society?",
    answer:
      "Yes, we regularly host industry professionals, organize career fairs, and provide opportunities to work on real-world projects that enhance your portfolio.",
  },
  {
    question: "How often does the UNZA Computer Science Society meet or hold events?",
    answer:
      "We hold regular monthly meetings and organize various events throughout the academic year. Check our events calendar for specific dates and times.",
  },
  {
    question: "Does the UNZA Computer Science Society have any partnerships with industry or other organizations?",
    answer:
      "Yes, we maintain partnerships with local and international tech companies, offering members exclusive opportunities for internships, training, and potential employment.",
  },
  {
    question: "How can I stay updated on news and events related to the UNZA Computer Science Society?",
    answer:
      "Follow us on social media, subscribe to our newsletter, and regularly check our website for updates on upcoming events and activities.",
  },
]

export function FAQSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about the UNZA Computer Science Society
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

