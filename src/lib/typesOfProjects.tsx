import z, { string } from 'zod'



export const ProjectSchema = z.object({
    title: z.string().min(6, {
        message: "Title is needed to continue. Min 6 Chars!"
    }),
    slug: z.string().trim().min(6, {
        message: "Slug must be unique. Min 6 Chars."
    }),
    short: z.string().min(6, {
        message: "Short is needed to continue. Min 6 Chars!"
    }),
    techs: z.string().min(4, {
        message: "At least One tech is required! Min Four Chars!"
    }),
    description:z.string().min(20, {
        message: "Description is needed to continue. Min 20 Chars!"
    }),
    imagelink:z.string().min(2, {
        message: "Cloudnary Project Image Link is needed!"
    }),
    githublink:z.string().min(2, {
        message: "GitHub repo is required!"
    }),
    demoLink: z.string().optional()
})