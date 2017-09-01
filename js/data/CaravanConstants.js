/**
 *   Базовые константы каравана
 *   для настроек событий и встреч - смотри соответствующие константы
 */
var Caravan = {
    DAY_IN_MS: 800, // день каравана в наших миллисекундах
    WEIGHT_PER_OX: 20, // вес на одного быка / средство передвижения
    WEIGHT_PER_PERSON: 2, // вес, который может нести один человек
    FOOD_WEIGHT: 0.6,  // вес 1 порции еды
    FIREPOWER_WEIGHT: 5,    // вес 1 единицы оружия
    DAY_PER_STEP: 0.2, // сколько дней в одном обновлении мира

    FOOD_PER_PERSON: 0.02,  // доля порции еды на 1 человека в день

    //FULL_SPEED: 5,  // максимальная скорость каравана в день,
    //SLOW_SPEED: 3, // минимальная скорость каравана в день,

    FULL_SPEED: 50, // максимальная скорость каравана в день,
    SLOW_SPEED: 39, // минимальная скорость каравана в день,

    ENEMY_FIREPOWER_AVG: 5, // todo вынести в атаки
    ENEMY_GOLD_AVG: 50,  // todo вынести в атаки
};