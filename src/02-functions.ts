import { Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues, } from './01-basics'

function older(f: Friend): string {
  f.age += 1
  return `${f.name} is now ${f.age}`
}
console.log(older(friends[0]))

function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

function addColleague(colleagues: Colleague[], name: string, department: string, email: string) {
  colleagues.push({
    name,
    department,
    contact: {
      email,
      extension: highestExtension(colleagues).contact.extension + 1,
    },
  });
}

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

function findFriends(friends: Friend[], criterion: (f: Friend) => boolean) {
  return friends.filter(criterion).map((f) => f.name);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));


console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));


addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
