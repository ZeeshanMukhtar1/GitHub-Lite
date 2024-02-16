export const getUserProfileAndRepos = async (req, res) => {
  try {
    res.json({ message: 'User Profile and Repos' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
