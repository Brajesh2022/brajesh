import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function AboutPage() {
  const features = [
    "Experienced Faculty (20+ teachers)",
    "Playground",
    "Transport System",
    "Computer Lab",
    "Science Lab",
    "Library",
  ]

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 page-content">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Welcome to Delhi Public School Keoti, where we strive to provide quality education in a nurturing
            environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our School</h2>
            <p className="text-muted-foreground">
              Welcome to our school, a branch of DPS Darbhanga! We strive to provide quality education to our students
              in a nurturing and supportive environment. Our school is led by Director B.K Yadav and Principal M.S.
              Yadav, who have a wealth of experience in education and are dedicated to ensuring that every student
              receives the best possible education.
            </p>
            <p className="text-muted-foreground">
              At our school, we believe in a holistic approach to education that focuses on developing the whole child.
              We provide a range of extracurricular activities and sports programs to help students develop their
              interests and talents outside of the classroom. We also encourage community service and volunteering to
              instill a sense of social responsibility in our students.
            </p>
            <p className="text-muted-foreground">
              We have a dedicated team of teachers who are passionate about teaching and helping students reach their
              full potential. Our classrooms are equipped with the latest technology and resources to provide an
              interactive and engaging learning experience.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/school-building.jpg" alt="DPS Keoti School Building" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a center of excellence in education that nurtures students to become responsible global citizens
                  with strong values, critical thinking skills, and a passion for lifelong learning.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide a holistic education that balances academic excellence with character development, enabling
                  students to reach their full potential and become confident, compassionate, and creative individuals
                  who contribute positively to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary">
                  <Image src="/images/director.jpg" alt="B.K. Yadav - Director" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">B.K. Yadav</h3>
                <p className="text-primary mb-2">Director</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary">
                  <Image src="/images/principal.jpg" alt="M.S. Yadav - Principal" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">M.S. Yadav</h3>
                <p className="text-primary mb-2">Principal</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary">
                  <Image src="/images/chairman.jpg" alt="S.A. Khan - Chairman" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">S.A. Khan</h3>
                <p className="text-primary mb-2">Chairman</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary">
                  <Image
                    src="/images/exam-controller.jpg"
                    alt="S.P. Yadav - Examination Controller"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">S.P. Yadav</h3>
                <p className="text-primary mb-2">Examination Controller</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

