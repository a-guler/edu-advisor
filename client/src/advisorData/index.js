import { fakerTR } from "@faker-js/faker";

export const AdvisorList = [
    {
        id : 0,
        image: fakerTR.image.urlPicsumPhotos(),
        fullName: fakerTR.person.fullName(),
        bio: fakerTR.person.bio()
    },
    {
        id : 1,
        image: fakerTR.image.urlPicsumPhotos(),
        fullName: fakerTR.person.fullName(),
        bio: fakerTR.person.bio()
    },
    {
        id : 2,
        image: fakerTR.image.urlPicsumPhotos(),
        fullName: fakerTR.person.fullName(),
        bio: fakerTR.person.bio()
    }
]