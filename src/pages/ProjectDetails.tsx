import { useParams } from "react-router-dom";
import { useEffect } from "react";

const projects = {
  automatedLeadEnrichment: {
    title: "Automated Lead Enrichment",
    image: "/projects/zapier2.jpg",
    caption: "Automatically enrich new leads with company data and social profiles from multiple sources.",
        description: {
      problem: "Businesses often deal with slow and inefficient lead management due to manual data entry, incomplete information, and delayed follow-ups. This results in missed opportunities, poor lead qualification, and lost potential revenue as sales teams struggle to focus on the most valuable prospects.",
      solution:"This workflow automates the entire lead handling process—from capturing incoming leads and enriching their data using external tools, to intelligently segmenting them into high and low priority paths. High-priority leads are instantly routed to the sales team with notifications, stored in a centralized system, and followed up with personalized email drafts, while low-priority leads are still nurtured through automated alerts to ensure consistent engagement.",
      benefits: [
      "Increase lead response speed by 80–90%",
      "Boost sales team efficiency by 50% with real-time notifications",
      "Ensure 100% lead capture and tracking with automated logging"],
      savings: [
      "Reduce manual data entry time by up to 70%",
      "Save 10–15 hours per week on lead processing and qualification",
      "Lower operational costs by 30% through workflow automation"]}
  },
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
  asanaCRMLeadEngagement: {
    title: "Asana CRM Lead Engagement Workflow",
    image: "/projects/zapier1.jpg",
    caption: "Automated lead follow-up and engagement tracking through Asana tasks.",
    description: {
      problem: "Most businesses lose potential clients not because of poor service, but slow responses, missed follow-ups, and inconsistent communication. Managing leads manually across different stages—quotation, approval, and closing—often results in forgotten emails, delayed replies, and disorganized files. This creates a poor client experience and directly impacts conversion rates and revenue.",
      solution:"This automated system ensures that no lead is ever left behind. As soon as a task is updated in Asana, the workflow instantly moves the client into the correct stage and triggers the right action—whether it’s sending a follow-up email, delivering a quote, checking for replies, or onboarding the client after approval. It also organizes files in Google Drive and ensures timely, personalized communication through Gmail. Every step is handled automatically, creating a smooth, professional, and consistent client journey that increases engagement and drives conversions.",
      benefits: [
      "Ensures every lead is followed up automatically and on time",
      "Increases response rates and client engagement",
      "Eliminates manual tracking and repetitive admin work"],
      savings: [
      "Recovers lost revenue by capturing leads that would have been missed",
      "Saves 8–15 hours per week on manual follow-ups and coordination",
      "Speeds up sales cycles, allowing faster deal closures"]}
  },
  asanaXeroTransaction: {
    title: "Asana-Triggered Xero Transaction Export Automation",
    image: "/projects/make2.png",
    caption: "Automatically fetches filtered bank transactions from Xero, logs them in Google Sheets, converts to CSV, and sends back to Asana — fully automated with Make.com.",
    description: {
      problem: "Teams often face inefficiencies when managing completed tasks across multiple platforms. After marking a task as complete in Asana, staff still need to manually retrieve related financial or client data from Xero, organize it in spreadsheets, and upload supporting files. This repetitive process consumes valuable time, increases the risk of human error, and delays reporting—especially as the volume of tasks grows.",
      solution:"This workflow automates the entire process from task completion to reporting. Once a task is completed in Asana, the system automatically pulls relevant data from Xero, processes and organizes it, and records it in Google Sheets. It also formats and aggregates the data, uploads necessary attachments back to Asana, and resets the system for the next cycle. The result is a seamless, end-to-end workflow that keeps all platforms synchronized and eliminates the need for manual intervention.",
      benefits: [
      "Significant time savings by removing repetitive manual tasks",
      "Accurate and real-time data tracking and reporting",
      "Centralized storage of files and updates within Asana",
      "Faster processing and improved operational efficiency"],
      savings: [
      "Reduces labor costs by saving approximately 5–10+ hours per week per staff",
      "Increases team productivity by allowing focus on higher-value tasks",
      "Minimizes errors caused by manual data entry and handling"]}
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
      "Saves 90–95% of processing time"]
    }
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
  },
    aiJobScraper: {
    title: "AI Jobs Scraper + Resume Optimizer",
    image: "/projects/n8n2.jpg",
    caption: "A smart AI-driven assistant that instantly analyzes incoming Facebook messages and document data to provide professional, human-like responses while you focus on your business.",
    description: {
      problem: "Job searching is time-consuming and repetitive, requiring users to manually search multiple platforms, filter relevant roles, tailor resumes for each opportunity, and draft outreach emails. This leads to inconsistent applications, missed opportunities, and significant time wasted on repetitive administrative tasks instead of focusing on high-value activities like interview preparation.",
      solution:"This automation streamlines the entire job application process by integrating Slack-triggered job searches, validating queries, fetching job listings, and filtering relevant opportunities. It automatically generates tailored resumes using AI, checks for existing documents, updates files in Google Drive, and creates personalized email drafts for applications. The workflow ensures consistency, speed, and accuracy while reducing manual intervention across the entire pipeline.",
      benefits: [
      "Eliminates repetitive manual job search and application tasks",
      "Improves application speed and response time",
      "Enhances productivity by allowing users to focus on interviews and networking"],
      savings: [
      "Reduces job application time by up to 80%",
      "Accelerates turnaround time for resume and email creation by 90%",
      "Increases application output by 3x without additional effort"]}
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