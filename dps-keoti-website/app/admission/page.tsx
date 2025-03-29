import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, FileText, CheckCircle } from "lucide-react"

export default function AdmissionPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 page-content">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join Delhi Public School Keoti and give your child the gift of quality education in a nurturing environment.
          </p>
        </div>

        <Card className="border-none shadow-lg max-w-4xl mx-auto mb-12">
          <CardHeader className="bg-primary text-white">
            <CardTitle className="text-xl">Admission Appointment Form Instructions</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-6">
              Kindly read all the instructions carefully before filling out the Online Registration form.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>We recommend that you use Chrome or Mozilla Firefox browser for filling this form.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Fields marked with <span className="text-red-500">*</span> are mandatory and need to be filled.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  You can submit the form only once. Therefore, check all the entries carefully before submitting the
                  form.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Download and print the Appointment Form after submitting your appointment request. Bring it with your
                  child on the day of your appointment.
                </span>
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-amber-800 mb-2">Documents required for Registration:</p>
                  <ul className="list-disc list-inside text-amber-700 space-y-1">
                    <li>Child's Photo</li>
                    <li>Father's Photo</li>
                    <li>Mother's Photo</li>
                    <li>Date of Birth Certificate</li>
                    <li>Parent's Aadhaar (if applicable)</li>
                    <li>Transfer Certificate (if applicable)</li>
                    <li>Child's Aadhaar (if applicable)</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mb-8">
              If you have any questions or concerns, please feel free to contact us through our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact page
              </Link>
              .
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="animate-pulse">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Register Now
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Admission Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Fill and submit the online registration form</li>
                <li>Schedule an appointment for assessment</li>
                <li>Attend the assessment with your child</li>
                <li>Receive admission decision</li>
                <li>Complete admission formalities and fee payment</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Age Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>Nursery:</strong> 3+ years as of 31st March
                </li>
                <li>
                  <strong>LKG:</strong> 4+ years as of 31st March
                </li>
                <li>
                  <strong>UKG:</strong> 5+ years as of 31st March
                </li>
                <li>
                  <strong>Class 1:</strong> 6+ years as of 31st March
                </li>
                <li>
                  <strong>Higher Classes:</strong> Age appropriate to the class applied for
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

