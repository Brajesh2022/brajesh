import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function ChairmanPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 page-content">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Chairman's Message</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="border-none shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <Image src="/images/chairman.jpg" alt="S.A. Khan - Chairman" fill className="object-cover" />
                </div>
                <h2 className="text-2xl font-bold text-center">S.A. Khan</h2>
                <p className="text-primary font-medium text-center">Chairman</p>
              </div>

              <div className="md:w-2/3">
                <div className="prose max-w-none text-gray-600">
                  <p>Wisdom Sculptures freedom</p>
                  <p>Freedom promotes knowledge</p>
                  <p>Knowledge exudes love</p>
                  <p>Love propels education</p>
                  <p>Education Visualizes dreams and dreams are the touchstone of Character!</p>

                  <p>
                    Schools are the training centre for the citizens of tomorrow. To ensure that Indians have a space in
                    the global platform, we need to nurture and promote innovation in thinking. Children must be
                    encouraged to think through a problem and come up with creative solutions by the help of technical
                    support.
                  </p>

                  <p>
                    Every new day brings a new experience to be felt and a new mystery to be solved, so everyday there
                    is a new era to be explored. This is a process that helps in moulding and shaping the budding
                    geniuses for the bright future of the nation.
                  </p>

                  <p>
                    Finally, the future lies in the hands of individuals who are ready to learn all through their lives.
                    The understanding and acknowledgment of this fact will bring about commitment and qualitative change
                    in teaching learning process by the co ordination of all the stake-holders of education sector e.
                    Parent, Child and Teacher.
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

