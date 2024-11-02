using Journal.Core.Entities;
using Journal.Shared.DataTransferObjects;

namespace Journal.App.Mapper
{
    public static class ColorMapper
    {
        public static ColorDto ToDto(this Color colorEntity)
        {
            return new ColorDto(colorEntity.HexCode);
        }
    }
}
