import { describe, expect, it, test } from "vitest"

describe ("shold take peoplr older than 90", () => {
    it("shold take peoplr older than 90", () => { 

        const ages = [18, 20, 22, 28, 38, 42, 90, 15, 11, 55,100 ]

        const oldAges = ages.filter(age => age > 90)

        expect(oldAges.length).toBe(1)
        expect(oldAges[0]).toBe(100)

    })
})


describe ("should return courses cheaper than 160", () => {
    it("should return courses cheaper than 160", () => { 

        const courses = [
            {
                title: 'CSS',
                price: 200
            },
            {
                title: 'JS',
                price: 300
            },
            {
                title: 'React',
                price: 150
            }
        ]
        const cheapCoursePices = courses.filter(course => course.price < 160)

        expect(cheapCoursePices.length).toBe(1)
        expect(cheapCoursePices[0].price).toBe(150)

    })
})
