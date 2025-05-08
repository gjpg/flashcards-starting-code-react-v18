import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},
};

export const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic(state, action) {
      const { id, name, icon, quizIds } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: quizIds || [],
      };
    },
    addQuiz(state, action) {
      const { topicId, quizId } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(quizId);
      }
    },
  },
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
