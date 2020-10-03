import { normalizedExperience } from '../../fixtures';

export default (experience = normalizedExperience, action) => {
    const { type } = action;

    switch (type) {
        default:
            return experience;
    }
}