"use client";

import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Community = () => {
  const [posts, setPosts] = useState([
    {
      user: "John Doe",
      content:
        "I just discovered an amazing cycling path at Prince's Island Park! Highly recommend it for a scenic ride.",
    },
    {
      user: "Jane Smith",
      content:
        "The view from Crescent Heights is stunning! Perfect for an early morning ride.",
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddPost = () => {
    if (newPost.trim() === "") {
      return alert("Post content cannot be empty!");
    }

    setPosts([{ user: "You", content: newPost }, ...posts]);
    setNewPost("");
  };

  const events = [
    {
      title: "Calgary Cycling Marathon",
      description:
        "Join us on July 15th for a thrilling cycling marathon in downtown Calgary.",
    },
    {
      title: "Guided Tour: Hidden Gems of Calgary",
      description:
        "Explore Calgary’s hidden gems with local guides. Available every Saturday.",
    },
  ];

  return (
    <>
      <Header />
      <main className="p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Community Insights</h1>
        <p className="mb-8 text-gray-700">
          Connect with the Urban Explorer community. Share your experiences,
          discover hidden gems, and join exciting events.
        </p>

        {/* Share Your Story Section */}
        <section className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">
            Share Your Journey
          </h2>
          <textarea
            className="w-full p-3 border border-gray-300 rounded mb-4"
            rows="4"
            placeholder="Share your experience or recommend a hidden gem..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          ></textarea>
          <button
            onClick={handleAddPost}
            className="bg-teal-600 text-white px-6 py-3 font-bold rounded hover:bg-teal-700 transition"
          >
            Post
          </button>
        </section>

        {/* Community Posts Section */}
        <section className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">
            Community Stories
          </h2>
          {posts.length > 0 ? (
            <ul className="space-y-4">
              {posts.map((post, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-300 rounded shadow cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedPost(post)} // Open modal on click
                >
                  <p className="font-semibold text-teal-600">{post.user}</p>
                  <p className="text-gray-700 truncate">{post.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">
              No stories shared yet. Be the first to post!
            </p>
          )}
        </section>

        {/* Local Guides and Events Section */}
        <section className="mb-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">
            Local Events and Guides
          </h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded shadow cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedEvent(event)} // Open modal on click
              >
                <h3 className="text-xl font-semibold text-teal-600">
                  {event.title}
                </h3>
                <p className="text-gray-700 truncate">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal for Selected Post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-teal-600 mb-4">
              {selectedPost.user}&apos;s Post
            </h2>
            <p className="text-gray-700">{selectedPost.content}</p>
            <button
              onClick={() => setSelectedPost(null)}
              className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Selected Event */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-teal-600 mb-4">
              {selectedEvent.title}
            </h2>
            <p className="text-gray-700">{selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Community;
