import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ListView = lazy(() =>
  import("../../list-view").then(({ ListView }) => ({ default: ListView }))
);
const FeedbackView = lazy(() =>
  import("../../feedback-view").then(({ FeedbackView }) => ({
    default: FeedbackView,
  }))
);
const Roadmap = lazy(() =>
  import("../../roadmap").then(({ Roadmap }) => ({ default: Roadmap }))
);
const NewFeedback = lazy(() =>
  import("../../new-feedback").then(({ NewFeedback }) => ({
    default: NewFeedback,
  }))
);
const EditFeedback = lazy(() =>
  import("../../edit-feedback").then(({ EditFeedback }) => ({
    default: EditFeedback,
  }))
);

export const Routing: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/feedback/:id" element={<FeedbackView />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/create" element={<NewFeedback />} />
        <Route path="/edit/:id" element={<EditFeedback />} />
      </Routes>
    </Suspense>
  );
};
