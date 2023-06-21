
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentsUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Nous n'avons pas trouvé de logement favoris."
          subtitle="Il semble que vous n'ayez pas d'annonces favorites."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;