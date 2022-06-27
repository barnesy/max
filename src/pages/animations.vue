<template>
  <Directory
    class="narrow dark"
    bgColor="var(--light-blue)"
    bgImage="url('/blue-to-black.jpg')"
  >
    <template #page-header>
      <Header class="v2">
        <template>
          Animations
        </template>
        <template #support>Here's some animations!!!</template>
      </Header>
    </template>

    <PageSection
      bgColor="var(--light-grey)"
      padding="6rem 3rem 7rem"
    >
      <template #title>
        lets look at these things!!!
      </template>
      one of my favrient
      <template>
       <CardGroup>

         <Card class="large">
           <template #image>
             <img src="/walkman.gif" />
           </template>
           <template>
             my first animation
           </template>
         </Card>



       </CardGroup>


      </template>

    </PageSection>

  </Directory>
</template>
