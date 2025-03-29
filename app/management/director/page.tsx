import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function DirectorPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 page-content">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Director's Message</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="border-none shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <Image src="/images/director.jpg" alt="B.K. Yadav - Director" fill className="object-cover" />
                </div>
                <h2 className="text-2xl font-bold text-center">B.K. Yadav</h2>
                <p className="text-primary font-medium text-center">Director</p>
              </div>

              <div className="md:w-2/3">
                <div className="prose max-w-none text-gray-600">
                  <p>
                    The school ensures climate of openness to new learning that incorporates best practices and
                    effective methodologies based on worth, uniqueness, polishing each individual's potentialities and
                    therefore promotes creation of a new learning culture in which students inculcate the spirit to
                    become life long learners. The school offers a programme which aims to mould and nurture thousands
                    of young minds through its value oriented education preparing the students to achieve and accomplish
                    the desired goals in their present and future. We give lot of importance on co-curricular
                    activities, games and sports & Life skill training too.
                  </p>

                  <p>
                    What I appreciate most is the solid support and collaboration that we receive from the parents and
                    well-wishers in all our endeavours. So, DPS is not only an institution but a family. As a result DPS
                    is today - a school most sought after, from where students would like to prepare not only for their
                    cherished careers in the world but for life itself.
                  </p>

                  <p>
                    The concept of Global Citizenship and approach towards the Holistic Development has been the essence
                    and vital force of DPS which ensures their glorious past, progressive present and promising future.
                    In our constant effort and endless enthusiasm, I want your full cooperation through your support and
                    feedback in imparting quality education and serving our motto to the best of our ability.
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

