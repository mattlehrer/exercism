export class GradeSchool {
  constructor() {
    this.classList = {};
  }
  
  roster() {
    return JSON.parse(JSON.stringify(this.classList));
  }

  add(name, grade) {
    this.classList[grade]
      ? this.classList[grade].push(name) 
      : this.classList[grade] = [name];
    this.classList[grade] = this.classList[grade].sort();
  }

  grade(grade) {
    return this.classList[grade]
      ? [...this.classList[grade]]
      : [];
  }
}
