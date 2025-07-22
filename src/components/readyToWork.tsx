import React from 'react'
import { Button } from './ui/button'


export default function ReadyToWork() {
  return (
    
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="  rounded-2xl p-12 text-black">
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-gradient">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-8 text-black/90">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <Button variant="outline" size="lg" className="border-white/30 text-chart-1 hover:bg-white/10 font-semibold px-8 py-4">
                Call Us: +977 9819185638
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}
