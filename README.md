# ArtisanBeacon AI

## Tagline

*Connecting Artisans with Art Lovers, Powered by AI.*

## Problem It Solves

ArtisanBeacon AI aims to bridge the gap between traditional artisans and a wider audience by providing a platform for discovery, appreciation, and connection. It addresses the challenges artisans face in showcasing their work and reaching potential customers in the digital age.

## Current State & Hackathon Scope

For this hackathon, ArtisanBeacon AI has been developed as a fully client-side React application to demonstrate the core user experience and features.

- All data (artisans, team members, AI analysis results) is mocked within the frontend application for demonstration purposes.
- The focus was on rapidly prototyping the UI/UX, interactive elements, and the conceptual flow of the application.

## Features Implemented (Client-Side)

- **Landing Page:** Engaging introduction to ArtisanBeacon AI.
- **Artisan Discovery:** Browse and filter a list of mock artisans.
- **Artisan Profiles:** View detailed profiles of mock artisans.
- **AI Art Recognition (Simulated):** Upload an image and receive a simulated AI analysis of the art style/form.
- **Team Page:** Information about the project team.
- **Responsive Design:** Adapts to various screen sizes.

## Technologies Used

- React
- Next.js (as a React framework)
- Tailwind CSS
- TypeScript
- Shadcn/ui (for UI components)

## Hypothetical Backend & Storage (Future Scope)

If this project were to be developed further, a robust backend and database would be essential.

-   **Backend:** A Node.js/Express.js or Python/FastAPI backend could handle API requests, business logic, and interactions with the database and AI services.
-   **Database:** A NoSQL database like MongoDB would be suitable for storing flexible artisan profiles, artwork details, and user information. Alternatively, a relational database like PostgreSQL could also be used depending on the data modeling needs.
-   **AI Model Integration:** The AI Art Recognition feature would connect to a dedicated AI model service. This could be a custom-trained model deployed via TensorFlow Serving/PyTorch Serve, or a cloud AI service like Google Cloud Vision AI or Azure Custom Vision.
-   **Image Storage:** User-uploaded images (for AI recognition) and artisan artwork images would be stored in a cloud storage solution like AWS S3, Google Cloud Storage, or Azure Blob Storage for scalability and reliability.
-   **User Authentication:** For artisan logins (to manage profiles) and user accounts (for features like saving favorites or contacting artisans), authentication (e.g., JWT-based or OAuth) would be implemented.

## How to Run Locally (Current Client-Side App)

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd ArtisanBeacon AI
    ```
3.  Install dependencies (using pnpm, npm, or yarn):
    ```bash
    pnpm install
    # or
    # npm install
    # or
    # yarn install
    ```
4.  Run the development server:
    ```bash
    pnpm dev
    # or
    # npm run dev
    # or
    # yarn dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## (Optional) Demo Video Link

*[Link to your demo video will go here]*

## (Optional) Live Demo Link

*[Link to your live deployment (e.g., Vercel, Netlify) will go here]*

## Challenges Faced (Client-Side Focus)

-   Simulating complex backend interactions (like AI analysis and database queries) purely on the client-side while maintaining a good user experience.
-   Managing application state effectively for features like filtering and dynamic content display without a backend.
-   Ensuring a consistent and responsive UI across different components and screen sizes.

## Future Scope (Beyond Backend)

-   **Real-time Chat with Artisans:** Allow users to communicate directly with artisans.
-   **E-commerce Integration:** Enable artisans to sell their products through the platform.
-   **User Accounts & Personalization:** Features like saving favorite artisans, personalized recommendations.
-   **Community Features:** Forums or groups for art enthusiasts and artisans.
-   **Workshop/Event Listings:** Artisans can list workshops or events they are hosting.

---
*This README was enhanced with the assistance of an AI Pair Programmer.*
