import applicationRepository from "@/repositories/applications-repository";

async function getApplicationsFromUser(id: number) {
    const applications = await applicationRepository.getApplicationsFromUser(id);
    if(!applications) throw new Error("No applications found");
    return applications;
}

async function createApplication(companyName: string, url: string, role: string, location: string, remuneration: string, hiringMethod: string, seniorityLevel: string, status: string, id: number) {
    const application = await applicationRepository.createApplication(companyName, url, role, location, remuneration, hiringMethod, seniorityLevel, status, id);
    if(!application) throw new Error("No application found");
    return application;
}
    
async function deleteApplication(id: number) {
    const application = await applicationRepository.deleteApplication(id);
    if(!application) throw new Error("No application found");
    return application;
}

async function updateApplicationFromUser(id: number, companyName: string, url: string, role: string, location: string, remuneration: string, hiringMethod: string, seniorityLevel: string, status: string) {
    const application = await applicationRepository.updateApplicationFromUser(id, companyName, url, role, location, remuneration, hiringMethod, seniorityLevel, status);
    if(!application) throw new Error("No application found");
    return application;
}

const applicationService = {
    getApplicationsFromUser,
    createApplication,
    deleteApplication,
    updateApplicationFromUser,
};


export default applicationService;
