import Counter from "@/components/counter"
import ScrollReveal from "@/components/scroll-reveal"
import { Users, BookOpen, Award, School } from "lucide-react"

export default function StatsSection() {
  return (
    <div className="bg-primary/5 dark:bg-gray-800/50 py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ScrollReveal delay={100}>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center premium-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold mb-2">
                <Counter end={500} suffix="+" className="text-primary" />
              </h3>
              <p className="text-muted-foreground">Students Enrolled</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center premium-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold mb-2">
                <Counter end={20} suffix="+" className="text-primary" />
              </h3>
              <p className="text-muted-foreground">Experienced Teachers</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center premium-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold mb-2">
                <Counter end={10} suffix="+" className="text-primary" />
              </h3>
              <p className="text-muted-foreground">Awards & Recognitions</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 text-center premium-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold mb-2">
                <Counter end={10} className="text-primary" />
              </h3>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

