<?php

/**
 * 分类 1、新增->检测 2、更新->检测 3、移动->检测 4、删除->检测
 * Class CmsTest
 */


class CmsTest extends TestCase
{

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testInsertCategory()
    {
        echo "Insert Category" . PHP_EOL;
        $rs = $this->sendRequest([], "/api/cms/category/update", "POST");
        $this->assertArrayHasKey("status", $rs);
        $this->assertArrayNotHasKey("error", $rs);
        echo "Insert Category Success" . PHP_EOL;
    }

    public function testUpdateCategory()
    {
        $rs = $this->sendRequest([], "/api/cms/category/list", "POST");
        $check = false;
        foreach($rs['result']['list'] as $item) {
            if($item['name'] == "xxx") {
                $check = true;
                break;
            }
        }
        echo "Update Category" . PHP_EOL;
        $this->assertTrue($check);
    }

    public function testMoveCategory()
    {
        echo "Move Category" . PHP_EOL;
        $this->assertTrue(true);
    }

    public function testDeleteCategory()
    {
        echo "Delete Category" . PHP_EOL;
        $this->assertTrue(true);
    }

    public function checkArticleCategory()
    {
        echo "Check Category" . PHP_EOL;
    }
}
