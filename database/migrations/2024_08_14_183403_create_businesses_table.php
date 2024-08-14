<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('address')->nullable();
            $table->string('type')->nullable();
            $table->string('ownerName')->nullable();
            $table->date('foundedDate')->nullable();
            $table->integer('numberOfEmployees')->nullable();
            // $table->decimal('annualRevenue', 15, 2)->nullable(); // Uncomment if needed
            $table->string('businessHours')->nullable(); // e.g., "9 AM - 5 PM"
            $table->json('services')->nullable(); // Assuming it's a JSON array
            $table->json('products')->nullable(); // Assuming it's a JSON array
            $table->string('logo')->nullable();
            $table->text('missionStatement')->nullable();
            $table->text('visionStatement')->nullable();
            // $table->json('socialMediaHandles')->nullable(); // Uncomment if needed
            // $table->json('operatingCountries')->nullable(); // Assuming it's a JSON array
            // $table->json('partners')->nullable(); // Assuming it's a JSON array
            $table->string('customerSupportContact')->nullable();
            $table->text('termsOfService')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('businesses');
    }
};
