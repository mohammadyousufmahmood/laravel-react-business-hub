<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BusinessResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // TO-REMOVE return parent::toArray($request);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'address' => $this->address,
            'type' => $this->type,
            "ownerName" => $this->ownerName,
            "foundedDate" => $this->foundedDate,
            "numberOfEmployees" => $this->numberOfEmployees,
            // "annualRevenue",
            "businessHours" => $this->businessHours, // e.g., "9 AM - 5 PM"
            "services" => $this->services,
            'products' => $this->products,
            "logo" => $this->logo,
            "missionStatement" => $this->missionStatement,
            "visionStatement" => $this->visionStatement,
            // "socialMediaHandles", // e.g., Facebook, Twitter, LinkedIn, etc.
            "operatingCountries" => $this->operatingCountries,
            "partners" => $this->partners,
            "customerSupportContact" => $this->customerSupportContact,
            "termsOfService" => $this->termOfService
        ];

    }
}
