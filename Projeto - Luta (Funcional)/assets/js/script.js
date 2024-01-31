const char = createSorcerer('Hatzume');
const monster = createBigMonster();
stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);