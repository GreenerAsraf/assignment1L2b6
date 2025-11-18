blog

# What are some differences between interfaces and types in TypeScript?

interface ও types ব্যবহার করা হয় অবজেক্ট গঠনে।ইন্টারফেস "ওপেন" এবং একাধিকবার ঘোষণা করা যায় (ডিক্লারেশন মার্জিং), যা অন্য ইন্টারফেসে প্রপার্টি যোগ করার সুবিধা দেয়। অন্যদিকে, টাইপ "ক্লোজড" এবং সাধারণত অন্য টাইপ থেকে তৈরি হয় বা অ্যালাইস (alias) তৈরি করে।

# Provide an example of using union and intersection types in TypeScript.

যখন একটি ভেরিয়েবল বা ফাংশনের প্যারামিটার একাধিক টাইপ নিতে হয় তখন Union টাইপ ব্যবহার করা হয় । এটি লেখা হয় "|" চিহ্ন দিয়ে।
যেমন
function printId(id: string | number) {
console.log("Your ID is:", id);
}

আর Intersection টাইপ ব্যবহার করা হয় যখন একটি ভেরিয়েবলকে একাধিক টাইপের সবগুলো শর্ত পূরণ করতে হয়।এটি লেখা হয় & চিহ্ন দিয়ে।
উদাহারণ
type Person = {
name: string;
age: number;
};

type Employee = {
employeeId: number;
department: string;
};

// Intersection এ সকল ফিল্ড এর তথ্য থাকতে হবে । নিচের উদাহারনে যেমন
Person & Employee এর ফিল্ড উভয় ফিলাপ করতে হবে। কোন একটা বাদ দেয়া যাবে না।
যেমন

type Person = {
name: string;
age: number;
};

type Employee = {
employeeId: number;
department: string;
};

type Staff = Person & Employee; [এখানে Intersection ব্যবহার করা হয়েছে]

const staff1: Staff = {
name: "Rakib",
age: 28,
employeeId: 101,
department: "IT"
};
