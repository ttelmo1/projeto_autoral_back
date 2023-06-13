import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import applicationService from "@/services/applications-service";


async function getUserApplications(req: Request, res: Response, next: NextFunction){
    const id = parseInt(req.params.id);
    try{
        const applications = await applicationService.getApplicationsFromUser(id);
        return res.status(httpStatus.OK).send(applications);
    }
    catch(error){
        return next(error);
    }
}

async function createApplication(req: Request, res: Response, next: NextFunction){
    const { companyName, url, role, location, remuneration, hiringMethod, seniorityLevel, status} = req.body;
    const id = parseInt(req.params.id);
    try{
        const application = await applicationService.createApplication(companyName, url, role, location, remuneration, hiringMethod, seniorityLevel, status, id);
        return res.status(httpStatus.CREATED).send(application);
    }
    catch(error){
        return next(error);
    }
}

async function deleteApplication(req: Request, res: Response, next: NextFunction){
    const id = parseInt(req.params.id);
    try{
        const application = await applicationService.deleteApplication(id);
        return res.status(httpStatus.OK).send(application);
    }
    catch(error){
        return next(error);
    }
}

async function updateApplicationFromUser(req: Request, res: Response, next: NextFunction){
    const { companyName, url, role, location, remuneration, hiringMethod, seniorityLevel, status} = req.body;
    const id = parseInt(req.params.id);
    try{
        const application = await applicationService.updateApplicationFromUser(id, companyName, url, role, location, remuneration, hiringMethod, seniorityLevel, status);
        return res.status(httpStatus.OK).send(application);
    }
    catch(error){
        return next(error);
    }
}


export default {
    getUserApplications,
    createApplication,
    deleteApplication,
    updateApplicationFromUser,
};

