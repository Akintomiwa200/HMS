export function HomeTestimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Trusted by Healthcare Professionals
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what doctors, nurses, and patients are saying about MediCare.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div>
              <p className="text-md mb-4">
                "MediCare has completely transformed how we manage patient care. The intuitive interface makes it easy to track appointments and medical records."
              </p>
            </div>
            <div>
              <p className="font-semibold">Dr. Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Chief of Medicine</p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div>
              <p className="text-md mb-4">
                "As a nurse, I need quick access to patient information. MediCare provides exactly that, helping me provide better care and save valuable time."
              </p>
            </div>
            <div>
              <p className="font-semibold">Michael Chen</p>
              <p className="text-sm text-muted-foreground">Head Nurse, ICU</p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
            <div>
              <p className="text-md mb-4">
                "Booking appointments and accessing my medical history has never been easier. MediCare gives me control over my healthcare journey."
              </p>
            </div>
            <div>
              <p className="font-semibold">Emily Rodriguez</p>
              <p className="text-sm text-muted-foreground">Patient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}