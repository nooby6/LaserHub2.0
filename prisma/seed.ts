import { Day, PrismaClient, UserSex } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // Seed data for the Admin table
    await prisma.admin.create({
        data: {
            id: "admin1",
            username: "admin1",
        },
    });
    await prisma.admin.create({
        data: {
            id: "admin2",
            username: "admin2",
        },
    });

    // Seed data for the Grade table (levels 1 to 6)
    for (let i = 1; i <= 6; i++) {
        await prisma.grade.create({
            data: {
                level: i,
            },
        });
    }

    // Seed data for the Class table (classes 1A to 6A with random capacities)
    for (let i = 1; i <= 6; i++) {
        await prisma.class.create({
            data: {
                name: `${i}A`, // Class name
                gradeId: i, // Associated grade
                capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15, // Random capacity between 15 and 20
            },
        });
    }

    // Seed data for the Subject table
    const subjectData = [
        { name: "Mathematics" },
        { name: "Science" },
        { name: "English" },
        { name: "History" },
        { name: "Geography" },
        { name: "Physics" },
        { name: "Chemistry" },
        { name: "Biology" },
        { name: "Computer Science" },
        { name: "Art" },
    ];

    for (const subject of subjectData) {
        await prisma.subject.create({ data: subject });
    }

    // Seed data for the Teacher table
    for (let i = 1; i <= 15; i++) {
        await prisma.teacher.create({
            data: {
                id: `teacher${i}`, // Unique ID for the teacher
                username: `teacher${i}`, // Username
                name: `TName${i}`, // First name
                surname: `TSurname${i}`, // Last name
                email: `teacher${i}@example.com`, // Email address
                phone: `123-456-789${i}`, // Phone number
                address: `Address${i}`, // Address
                bloodType: "A+", // Blood type
                sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE, // Alternating gender
                subjects: { connect: [{ id: (i % 10) + 1 }] }, // Assign a subject
                classes: { connect: [{ id: (i % 6) + 1 }] }, // Assign a class
                birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 30)), // Fixed age of 30 years
            },
        });
    }

    // Seed data for the Lesson table
    for (let i = 1; i <= 30; i++) {
        await prisma.lesson.create({
            data: {
                name: `Lesson${i}`, // Lesson name
                day: Day[
                    Object.keys(Day)[
                        Math.floor(Math.random() * Object.keys(Day).length)
                    ] as keyof typeof Day
                ], // Random day of the week
                startTime: new Date(new Date().setHours(new Date().getHours() + 1)), // Start time
                endTime: new Date(new Date().setHours(new Date().getHours() + 3)), // End time
                subjectId: (i % 10) + 1, // Associated subject
                classId: (i % 6) + 1, // Associated class
                teacherId: `teacher${(i % 15) + 1}`, // Associated teacher
            },
        });
    }

    // Seed data for the Parent table
    for (let i = 1; i <= 25; i++) {
        await prisma.parent.create({
            data: {
                id: `parentId${i}`, // Unique ID for the parent
                username: `parentId${i}`, // Username
                name: `PName ${i}`, // First name
                surname: `PSurname ${i}`, // Last name
                email: `parent${i}@example.com`, // Email address
                phone: `123-456-789${i}`, // Phone number
                address: `Address${i}`, // Address
            },
        });
    }

    // Seed data for the Student table
    for (let i = 1; i <= 50; i++) {
        await prisma.student.create({
            data: {
                id: `student${i}`, // Unique ID for the student
                username: `student${i}`, // Username
                name: `SName${i}`, // First name
                surname: `SSurname ${i}`, // Last name
                email: `student${i}@example.com`, // Email address
                phone: `987-654-321${i}`, // Phone number
                address: `Address${i}`, // Address
                bloodType: "O-", // Blood type
                sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE, // Alternating gender
                parentId: `parentId${Math.ceil(i / 2) % 25 || 25}`, // Associated parent
                gradeId: (i % 6) + 1, // Associated grade
                classId: (i % 6) + 1, // Associated class
                birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)), // Fixed age of 10 years
            },
        });
    }

    // Seed data for the Exam table
    for (let i = 1; i <= 10; i++) {
        await prisma.exam.create({
            data: {
                title: `Exam ${i}`, // Exam title
                startTime: new Date(new Date().setHours(new Date().getHours() + 1)), // Start time
                endTime: new Date(new Date().setHours(new Date().getHours() + 2)), // End time
                lessonId: (i % 30) + 1, // Associated lesson
            },
        });
    }

    // Seed data for the Assignment table
    for (let i = 1; i <= 10; i++) {
        await prisma.assignment.create({
            data: {
                title: `Assignment ${i}`, // Assignment title
                startDate: new Date(new Date().setHours(new Date().getHours() + 1)), // Start date
                dueDate: new Date(new Date().setDate(new Date().getDate() + 1)), // Due date
                lessonId: (i % 30) + 1, // Associated lesson
            },
        });
    }

    // Seed data for the Result table
    for (let i = 1; i <= 10; i++) {
        await prisma.result.create({
            data: {
                score: 90, // Fixed score
                studentId: `student${i}`, // Associated student
                ...(i <
      },
    });
  }

  // ATTENDANCE
  for (let i = 1; i <= 10; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date(), 
        present: true, 
        studentId: `student${i}`, 
        lessonId: (i % 30) + 1, 
      },
    });
  }

  // EVENT
  for (let i = 1; i <= 5; i++) {
    await prisma.event.create({
      data: {
        title: `Event ${i}`, 
        description: `Description for Event ${i}`, 
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)), 
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)), 
        classId: (i % 5) + 1, 
      },
    });
  }

  // ANNOUNCEMENT
  for (let i = 1; i <= 5; i++) {
    await prisma.announcement.create({
      data: {
        title: `Announcement ${i}`, 
        description: `Description for Announcement ${i}`, 
        date: new Date(), 
        classId: (i % 5) + 1, 
      },
    });
  }

  console.log("Seeding completed successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });