import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function ExamControllerPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 page-content">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Examination Controller's Message</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="border-none shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <Image
                    src="/images/exam-controller.jpg"
                    alt="S.P. Yadav - Examination Controller"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-center">S.P. Yadav</h2>
                <p className="text-primary font-medium text-center">Examination Controller</p>
              </div>

              <div className="md:w-2/3">
                <div className="prose max-w-none text-gray-600">
                  <p>Dear DPS Family and well-wishers,</p>

                  <p>Warm greetings!</p>

                  <p>
                    I have been entrusted with the accountability of the Controller of Examinations of Delhi Public
                    School Keoti as the school prepares to celebrate its Silver Jubilee. Since its inception, the school
                    has been committed to being a leader in the promotion of demand-based higher education, research,
                    and community service. DPS has now established a reputation of its own in the academic world. The
                    Office of the Controller of Examinations will focus on enhancing the existing system continuously to
                    ensure reliable evaluation of the teaching and learning processes.
                  </p>

                  <p>
                    I am confident and committed to improving the evaluation system of the school with active
                    participation from all students, faculty members, staff, and other stakeholders.
                  </p>

                  <p>
                    I look forward to working with you and wish you all a pleasant and successful academic environment
                    at the Office of Controller of Examinations, Delhi Public School Keoti.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

