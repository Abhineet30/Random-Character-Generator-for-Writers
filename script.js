document.getElementById('generateBtn').addEventListener('click', () => {
    const prompt = document.getElementById('promptInput').value.trim();
    const profileDiv = document.getElementById('characterProfile');

    if (!prompt) {
        profileDiv.textContent = 'Please enter a prompt.';
        return;
    }

    // For now, only handle the example prompt specifically
    if (prompt.toLowerCase().includes('rebellious teenage wizard living in a post-apocalyptic world')) {
        const characterProfile = generateRebelliousTeenageWizard();
        profileDiv.textContent = characterProfile;
    } else {
        profileDiv.textContent = 'Character generation for this prompt is not yet supported.';
    }
});

function generateRebelliousTeenageWizard() {
    const names = ['Kai', 'Luna', 'Jax', 'Riven', 'Zara', 'Finn', 'Nova', 'Ash'];
    const personalityTraits = [
        'defiant and independent',
        'quick-witted and sarcastic',
        'loyal to friends but distrustful of authority',
        'brave but reckless',
        'curious and adventurous',
        'secretly compassionate beneath a tough exterior'
    ];
    const backstories = [
        'Grew up in the ruins of a once-great city, learning magic from scavenged books.',
        'Lost their family to a mysterious catastrophe and now fights to survive.',
        'Discovered their magical abilities after a chance encounter with an ancient artifact.',
        'Part of a hidden group of wizards trying to restore the world.',
        'Exiled from a magical enclave for breaking the rules.',
        'Haunted by visions of the past apocalypse, driving their rebellious nature.'
    ];
    const quirks = [
        'Always wears a tattered cloak with hidden pockets.',
        'Has a habit of talking to their wand as if it were alive.',
        'Collects strange trinkets from the wasteland.',
        'Refuses to use technology, relying solely on magic.',
        'Often hums an old lullaby from before the apocalypse.',
        'Has a pet crow that scouts ahead.'
    ];

    function randomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const name = randomItem(names);
    const trait = randomItem(personalityTraits);
    const backstory = randomItem(backstories);
    const quirk = randomItem(quirks);

    return `Name: ${name}
Age: 16
Occupation: Teenage Wizard
Personality: ${trait}
Backstory: ${backstory}
Quirks: ${quirk}`;
}
