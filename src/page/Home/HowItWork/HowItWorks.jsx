import React from 'react';

const HowItWorks = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-24">
      <div className="grid md:grid-cols-5 gap-6 md:gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              <span className="text-green-600 underline decoration-4 underline-offset-4">
                How
              </span>{' '}
              It Works — FAQ
            </h2>
            <p className="mt-1 hidden md:block text-gray-600">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="join join-vertical bg-base-100 w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border-b">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold text-lg py-8">
                How do I find a study partner?
              </div>
              <div className="collapse-content text-sm text-gray-500/90">
                Once you create your profile, you can use the search and filter
                options to find partners who share your subjects, study goals,
                and availability.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold text-lg py-8">
                What information should I include in my profile?
              </div>
              <div className="collapse-content text-sm text-gray-500/90">
                Include your subjects of interest, skill level, availability
                time, experience level, study goals, and preferred study times
                to get the best partner matches.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold text-lg py-8">
                What types of study partners can I find?
              </div>
              <div className="collapse-content text-sm text-gray-500/90">
                You can find students from various academic levels and subjects,
                ranging from high school to university students.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold text-lg py-8">
                What benefits will I get if I join with these partners?
              </div>
              <div className="collapse-content text-sm text-gray-500/90">
                Those who do good work or who are knowledgeable will help you.
                They can assist you like in a group study. They will do whatever
                is needed to help you achieve your goals.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold text-lg py-8">
                Can I join or create study groups?
              </div>
              <div className="collapse-content text-sm text-gray-500/90">
                Yes! You can create or join groups to collaborate with multiple
                partners on shared goals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
