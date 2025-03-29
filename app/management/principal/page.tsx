import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PrincipalPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 page-content">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Principal's Message</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="border-none shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <Image src="/images/principal.jpg" alt="M.S. Yadav - Principal" fill className="object-cover" />
                </div>
                <h2 className="text-2xl font-bold text-center">M.S. Yadav</h2>
                <p className="text-primary font-medium text-center">Principal</p>
              </div>

              <div className="md:w-2/3">
                <div className="prose max-w-none text-gray-600">
                  <p>Dear Parents,</p>

                  <p>
                    The School is a place where children are encouraged to say "I see it, I get it, I can do it. Our
                    philosophy of education has always been meeting the needs of the individual child. Children acquire
                    skills and knowledge easily if we can make the surrounding stimulating and purposeful. In the 21st
                    century, the Digital Revolution affects us all. Quite simply, it is changing everything: a brilliant
                    barrage of information, entertainment, companionship and education is speedily available. In such a
                    surrounding when work and effort is valued, the child's self-esteem is heightened, and from this
                    results self motivation. We try to understand and work with each child, and we firmly believe that
                    it is our responsibility to enable the child in our care to develop as a whole.
                  </p>

                  <p>
                    Our goal at DPS is to provide an enriching, engaging, and challenging curriculum that will prepare
                    students for success while at DPS and for the years that follow. We believe that students, parents
                    and teachers all play a vital role in helping students reach their greatest potential. Parents are
                    encouraged to check their progress regularly on our parent portal, which can be accessed via our
                    school website. Students are encouraged to take advantage of the many resources available to them-
                    their teachers, the library, the computer labs, and the smart classes.
                  </p>

                  <p>
                    The school where the quality matters the most we have tried to reflect the kaleidoscope of learning,
                    adventures, creativities and positive approach of our young minds through writing and wings. I hope
                    this effort of our minds will serve as a stepping stone towards the many miles stones we have to
                    cover in pursuit of excellence.
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

