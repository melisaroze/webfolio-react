import { useParams } from "react-router-dom";
import { useEffect } from "react";

const projects = {
  automatedSocialMediaPost: {
    title: "Automated Content Repurposing & Social Media Distribution System",
    image: "/projects/zapier3.jpg",
    caption: "Schedule and publish content across platforms automatically from a single source.",
    description: {
      problem: "Businesses and content creators often struggle to consistently produce and distribute content across multiple platforms. Manually transcribing videos or audio, turning them into written content, and posting across channels is time-consuming, inconsistent, and prone to delays—leading to missed engagement opportunities and underutilized content assets.",
      solution:"This workflow automates the entire content pipeline by detecting new files uploaded to Google Drive, filtering relevant content, and using AI to generate accurate transcriptions and transform them into ready-to-publish blog posts. The system then loops through the generated content, segments it based on conditions, and automatically distributes posts across platforms like Facebook and LinkedIn—ensuring consistent, fast, and scalable content publishing without manual effort.",
      benefits: [
      "Accelerate content production and publishing cycles",
      "Repurpose content efficiently from a single source file",
      "Maintain consistent posting across multiple platforms"],
      savings: [
      "Reduce content creation and publishing time by up to 70%",
      "Lower content production costs by 40% through automation",
      "Cut manual processing errors by up to 80%"]}
  },
  attachmentProcessAndLogger: {
    title: "AI-Powered Attachment Processor & Logger",
    image: "/projects/make1.jpg",
    caption: "A smart automation that instantly analyze incoming email attachments, extract key data into Google Sheets, and provide a professional confirmation to the sender—removing all manual data entry.",
    description: {
      problem: "Businesses often receive large volumes of emails with attachments (e.g., documents, images, or reports). Manually downloading, reviewing, uploading, and logging these files into spreadsheets is time-consuming, error-prone, and inefficient.",
      solution:"This automation workflow streamlines the entire process—from email monitoring to AI processing and data logging—without manual intervention. It automatically detects incoming emails, extracts attachments, processes them using AI, stores the files, logs structured data into Google Sheets, and sends a confirmation email.",
      benefits: [
      "100% Automation: Eliminates repetitive manual tasks",
      "Faster Processing: Reduces turnaround time from hours to seconds",
      "Improved Accuracy: Minimizes human error in data entry",
      "Centralized Data: Automatically organizes files and logs in one place",
      "Scalable System: Handles increasing email volume without extra workload",
      "AI-Powered Insights: Extracts or generates meaningful data from attachments"],
      savings: [
      "Manual process: ~5–10 minutes per email",
      "Automated process: ~5–10 seconds per email",
      "Saves 90–95% of processing time"]}
  },
  aiFbAgent: {
    title: "AI FB Agent",
    image: "/projects/n8n1.jpg",
    caption: "A smart AI-driven assistant that instantly analyzes incoming Facebook messages and document data to provide professional, human-like responses while you focus on your business.",
    description: {
      problem: "Businesses handling large volumes of messages across platforms often face slow response times, missed inquiries, and inconsistent communication. Manually replying, tracking conversations, and managing follow-ups not only consumes valuable time but also leads to lost leads, poor customer experience, and decreased conversion rates.",
      solution:"This workflow automates message handling by capturing incoming conversations, processing them intelligently, and generating structured, timely responses. It ensures messages are organized, filtered, and routed appropriately while enabling automated replies and follow-ups. By centralizing communication and reducing manual intervention, the system helps businesses respond faster, stay consistent, and convert more inquiries into paying customers.",
      benefits: [
      "Increase lead conversion through faster engagement",
      "Reduce missed inquiries and lost opportunities",
      "Enhance overall customer experience and brand reliability"],
      savings: [
      "Save 10–20 hours per week on message handling",
      "Improve conversion rates by 20–35%",
      "Reduce manual response workload by up to 70%"]}
  }
};


const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/melizatechva/30min",
          text: "Ready to put your business on autopilot?",
          color: "#f76b24",
          textColor: "#ffffff"
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  if (!project) {
    return <div className="text-center mt-5">Project not found</div>;
  }


  return (
    <div className="container pt-24 py-8 p-4 md:px-0">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold mb-6">{project.title}</h1>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded shadow "
          style={{ maxHeight: "900px", objectFit: "cover" }}
        />
      </div>

      {/* Caption */}
      <p className="text-center mt-3 text-muted fst-italic">
        {project.caption}
      </p>

      {/* Description */}
      <div className="mt-4">
        <p className="mb-2"><strong>Problem:</strong> {project.description.problem}</p>
        <p className="mb-5"><strong>Solution:</strong> {project.description.solution}</p>

        <p className="font-bold">Benefits:</p>
        <ul className="list-disc pl-5 ">
          {project.description.benefits.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <br></br>

        <p className="font-bold">Savings
          :</p>
        <ul className="list-disc pl-5">
          {project.description.savings.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default ProjectDetails;