import ahss from "../assets/academics/ahss_logo.png";
import bhss from "../assets/academics/bhss_logo.png";
import tpgit from "../assets/academics/tpgit_logo.png";

export const getAcademics = () => {
  return [
    {
      institution:
        "THANTHAI PERIYAR GOVERNMENT INSTITUTE OF TECHNOLOGY, VELLORE",
      logo: tpgit,
      education: "B.E. Computer Science & Engineering",
      from: "2018",
      to: "2022",
      cgpa: "7.75",
    },
    {
      institution: "BRINDHAVAN HIGHER SECONDARY SCHOOL, PATTUKOTTAI",
      logo: bhss,
      education: "Higher Secondary",
      from: "2016",
      to: "2018",
      cgpa: "9.00",
    },
    {
      institution: "ARUNODHAYA HIGHER SECONDARY SCHOOL, SENDANKADU",
      logo: ahss,
      education: "High School",
      from: "2015",
      to: "2016",
      cgpa: "9.78",
    },
  ];
};
