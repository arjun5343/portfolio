import React from "react";

const education = () => {
  const education = [
    {
      title: "Jawaharlal College of Engineering and Technology (JCET)",
      description:
        "Bachelor's Degree Computer Science 2019-23 Batch",
      photo: "/src/assets/projects/ktu.jpg",
    },
    {
      title: "MESHSS",
      description:
        "HIGHER SECONDARY EDUCATION BOARD 2017-2019 BATCH PASSOUT STUDENT PERCENTAGE:79.6%",
      photo: "/src/assets/projects/MEES.jpeg",
    },
    {
      title: "METEMHSS",
      description:
        "HIGH SCHOOL EDUCATION KERALA- 2017 BATCH.This stage in my academic journey is not just about mastering subjects but also about discovering interests.",
      photo: "/src/assets/projects/MET.jpg",
    }, 
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="education">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Education Qualification:
      </h1>
      <p className="my-3 text-white  leading-[2]">
      As an individual passionate about continuous learning and professional development, I have cultivated a solid foundation through my educational qualifications. My academic journey reflects not only a commitment to excellence but also a thirst for acquiring knowledge that can be applied meaningfully in real-world.
      </p>
      {/* featured education */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {education.map((education, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={education.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={education.photo} alt={education.title} />
              </a>
              <h3 className="text-primary font-bold text-lg ">
                {education.title}
              </h3>
              <p className=" text-white mt-1 text-justify">{education.description}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default education;
