import { prisma } from '@/config';

async function getApplicationsFromUser(id: number) {
    const applications = await prisma.applications.findMany({
        where: {
            id,
        },
    });
    return applications;
}


async function createApplication(companyName: string, url: string, role: string, location: string, remuneration: string, hiringMethod: string, seniorityLevel: string, status: string, id: number) {
    const application = await prisma.applications.create({
        data: {
            companyName,
            url,
            role,
            location,
            remuneration,
            hiringMethod,
            seniorityLevel,
            status,
            userId: id,
        },
    });
    return application;
}

async function deleteApplication(id: number) {
    const application = await prisma.applications.delete({
        where: {
            id,
        },
    });
    return application;
}

async function updateApplicationFromUser(id: number, companyName: string, url: string, role: string, location: string, remuneration: string, hiringMethod: string, seniorityLevel: string, status: string) {
    const application = await prisma.applications.update({
        where: {
            id,
        },
        data: {
            companyName,
            url,
            role,
            location,
            remuneration,
            hiringMethod,
            seniorityLevel,
            status,
        },
    });
    return application;
}

const applicationRepository = {
    getApplicationsFromUser,
    createApplication,
    deleteApplication,
    updateApplicationFromUser,
};

export default applicationRepository;
