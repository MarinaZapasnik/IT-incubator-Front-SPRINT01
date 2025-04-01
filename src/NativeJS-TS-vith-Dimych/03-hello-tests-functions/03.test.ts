import { beforeEach, describe, expect, it } from "vitest";
import { StudentType } from "../02-hello-tests-objects/02";
import { addSkill, isStudentLiveIn, makeStudentActive } from "./03";

let studenter: StudentType

beforeEach (() => {
    studenter = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

describe ("new tech skill should be added to student", () => {
    it("new tech skill should be added to student", () => {

        expect(studenter.technologies.length).toBe(3)

        addSkill(studenter, "JS")

        expect(studenter.technologies.length).toBe(4)
        expect(studenter.technologies[3].title).toBe("JS")
        expect(studenter.technologies[3].id).toBeDefined()
    })
})

describe ("student should become active", () => {
    it("student should become active", () => {

        expect(studenter.isActive).toBe(false)

        makeStudentActive(studenter)

        expect(studenter.isActive).toBe(true)
        
    })
})

describe ("is student live in the city?", () => {
    it("is student live in the city?", () => {

        let result1 = isStudentLiveIn(studenter, "Moscow")
        let result2 = isStudentLiveIn(studenter, "Minsk")

        expect(result1).toBe(false)
        expect(result2).toBe(true)
        
    })
})