<template>
  <div class="sidebar shadow p-3">
    <b-form>
      <b-form-group :label="priceRange.name">
        <b-row>
          <b-col cols="6">
            <b-form-input placeholder="От"></b-form-input>
          </b-col>
          <b-col cols="6">
            <b-form-input placeholder="До"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group v-for="(filter, index) of filters" :key="filter.id" :label="filter.groupName" class="mb-3" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
            :id="`checkbox-group-${index}`"
            v-model="selected"
            :options="filter.checkboxes"
            :name="filter.id"
        ></b-form-checkbox-group>
      </b-form-group>
      <b-form-group v-for="color of styleFilters"  :label="color.name" :key="color.id">
        <b-form-select  :options="color.options"></b-form-select>
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
import AppSidebarDefault from "@/components/default/AppSidebar";
export default {
  name: 'AppSidebarSite',
  extends: AppSidebarDefault,
  computed: {
    styleFilters(){
      return this.$store.state.Catalog.filters.filtersSelect
    }
  }
}
</script>
