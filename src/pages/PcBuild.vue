<template>
  <Directory
    class="narrow dark"
    bgColor="var(--light-blue)"
    bgImage="url('/blue-to-black.jpg')"
  >
    <template #page-header>
      <Header class="v2">
        <template>
          My PC Build
        </template>
        <template #support>Here's some stuff about me!!!</template>
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
         <Card>
           <template #image>
            <g-image src="~/assets/motherboard.png"/>
           </template>
           <template>
          this is my motherboard
           </template>
         </Card>

         <Card>
           <template #image>
             <g-image src="https://c1.neweggimages.com/ProductImage/A4P0S211028AB28F.jpg" />
           </template>
           <template>
             this is my cpu
           </template>
         </Card>

         <Card>
           <template #image>
            <g-image src="https://c1.neweggimages.com/ProductImage/11-139-165-V21.jpghttps://c1.neweggimages.com/ProductImage/11-139-165-V21.jpg" />
           </template>
           <template>
             this is my case
           </template>
         </Card>

        <Card url="https://www.amazon.com/gp/product/B07QX9C9WH/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&psc=1">
          <template #image>
           <g-image src="https://c1.neweggimages.com/ProductImage/11-139-165-V21.jpghttps://c1.neweggimages.com/ProductImage/11-139-165-V21.jpg" />
          </template>

          <template>
             my mouse
          </template>
        </Card>

        <Card url="https://c1.neweggimages.com/ProductImage/11-139-165-V21.jpg">
          <template #image>
            <g-image src="~/assets/ram.png" />
          </template>

          <template>
            my ram
          </template>
        </Card>

        <Card>
           <template #image>

          </template>

           <template>
            
           </template>
         </Card>       
         <Card>
           <template #image>

          </template>

           <template>
            
           </template>
         </Card>       


       </CardGroup>


      </template>
    
    </PageSection>

  </Directory>
</template>
