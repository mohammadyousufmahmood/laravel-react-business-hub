<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Business>
 */
class BusinessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company,
            'description' => $this->faker->paragraph,
            'address' => $this->faker->address,
            'type' => $this->faker->randomElement(['Retail', 'Service', 'Manufacturing', 'Technology']),
            'ownerName' => $this->faker->name,
            'foundedDate' => $this->faker->date,
            'numberOfEmployees' => $this->faker->numberBetween(1, 1000),
            'businessHours' => '9 AM - 5 PM', // Static example; you can also use Faker for times
            'services' => $this->faker->words(5, true), // Random list of services
            'products' => $this->faker->words(5, true), // Random list of products
            'logo' => $this->faker->imageUrl(100, 100, 'business', true), // Placeholder image URL
            'missionStatement' => $this->faker->sentence,
            'visionStatement' => $this->faker->sentence,
            // 'operatingCountries' => $this->faker->country,
            'partners' => $this->faker->company,
            'customerSupportContact' => $this->faker->phoneNumber,
            'termsOfService' => $this->faker->paragraph
        ];
    }
}
