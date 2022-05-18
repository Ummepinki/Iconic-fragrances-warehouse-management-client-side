import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5'>
            <h2>Q:1. Difference between javascript and nodejs?</h2>
            <p>Ans:It is a JS runtime environment that lets Javascript to be run on the server-side. It is cross-platform, and it thus allows the JS code to run outside any browser easily. There are various modules in NodeJS, and it is mainly utilised in the process of web development.We can only run JS on browsers.<br />

                It is a scripting language, but JS is basically the ECMA script’s updated version. Javascript is mainly utilised in making the HTML web pages more dynamic and interactive. It is a high-level language, and it makes use of the Oops concept. Yet, it is based primarily on the concept of prototype inheritance.NodeJS helps us run JS outside the browser as well.
            </p>
            <br />
            <h2>Q:2. When should you use nodejs and when should you use mongodb?</h2>
            <p>Ans:Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                <br />
                MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.
            </p>
            <br />
            <h2>Q:3. Difference between sql and nosql database?</h2>
            <p>Ans:SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                As for speed, NoSQL is generally faster than SQL, especially for key-value storage in our experiment; On the other hand, NoSQL database may not fully support ACID transactions, which may result data inconsistency.
            </p>
        </div>
    );
};

export default Blogs;