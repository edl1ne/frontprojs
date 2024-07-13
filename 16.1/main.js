class Student {
    constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = [];
      this.attendance = new Array(25).fill(null);
    }
  
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    }
  
    present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = true;
      }
    }
  
    absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = false;
      }
    }
  
    getAttendanceRate() {
      const attendedClasses = this.attendance.filter(status => status === true).length;
      const totalClasses = this.attendance.filter(status => status !== null).length;
      return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
    }
  
    summary() {
      const averageGrade = this.getAverageGrade();
      const attendanceRate = this.getAttendanceRate();
      if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  }
  
  // Приклади створення студентів і використання методів
  
  const student1 = new Student("Steve", "Jobs", 1955);
  const student2 = new Student("Tim", "Cook", 1960);
  const student3 = new Student("Jeff", "Williams", 1963);
  
  // Додавання оцінок
  student1.grades.push(95, 95, 92);
  student2.grades.push(78, 82, 81);
  student3.grades.push(91, 94, 90);
  
  // Відмітка відвідуваності
  student1.present();
  student1.present();
  student1.present();
  
  student2.present();
  student2.absent();
  student2.absent();
  
  student3.absent();
  student3.present();
  student3.present();
  
  // Виведення результатів
  console.log(`${student1.firstName} ${student1.lastName} - Вік: ${student1.getAge()}, Середній бал: ${student1.getAverageGrade()}, Відвідуваність: ${student1.getAttendanceRate()}`);
  console.log(student1.summary());
  
  console.log(`${student2.firstName} ${student2.lastName} - Вік: ${student2.getAge()}, Середній бал: ${student2.getAverageGrade()}, Відвідуваність: ${student2.getAttendanceRate()}`);
  console.log(student2.summary());
  
  console.log(`${student3.firstName} ${student3.lastName} - Вік: ${student3.getAge()}, Середній бал: ${student3.getAverageGrade()}, Відвідуваність: ${student3.getAttendanceRate()}`);
  console.log(student3.summary());
  